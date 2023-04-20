import { Injectable } from '@angular/core'; //! apuntes de todo este servicio
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interface';

@Injectable({ //! apuntes injectable
    providedIn: 'root' // gracias a esto toda la aplicación lo usa y no hace falta proveerlo en un módulo
})
export class GifsService {

    public gifList: Gif[] = [];

    private apiKey: string = '0XQtTI7m87qfQa3opURSG6TU5pfTTW4g';
    private ServiceUrl: string = 'https://api.giphy.com/v1/gifs';

    private _tagsHistory: string[] = [];

    constructor(private http: HttpClient) { //! apuntes todo lo relacionado con este modulo
       
        this.loadLocalStorage();
    }

    get tagsHistory() {
        return [...this._tagsHistory];
    }

    private organizeHistory(tag: string) {
        tag = tag.toLowerCase();

        if (this._tagsHistory.includes(tag)) {
            this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag)
        }

        this._tagsHistory.unshift(tag);
        this._tagsHistory = this.tagsHistory.splice(0, 10);
        this.saveLocalStorage();
    }

    private saveLocalStorage():void {
        localStorage.setItem('history', JSON.stringify( this._tagsHistory))
    }

    private loadLocalStorage():void {
        if (!localStorage.getItem('history')) return;

        this._tagsHistory = JSON.parse( localStorage.getItem('history')! )
        
        if (this._tagsHistory.length > 0){

            this.searchTag( this._tagsHistory[0] )
        }
    }


    searchTag(tag: string): void {

        if (tag.length === 0) return;
        this.organizeHistory(tag);

        const params = new HttpParams() // esto viene de JS
            .set('api_key', this.apiKey)
            .set('limit', '10')
            .set('q', tag)

        this.http.get<SearchResponse>(`${this.ServiceUrl}/search`, { params })
            .subscribe(resp => { // apuntes suscribe

                this.gifList = resp.data;
                 console.log({ gifs: this.gifList });

            });
    }
}