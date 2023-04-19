import { Injectable } from '@angular/core'; //! apuntes de todo este servicio

@Injectable({ //! apuntes injectable
    providedIn: 'root' // gracias a esto toda la aplicación lo usa y no hace falta proveerlo en un módulo
})
export class GifsService {


    private _tagsHistory: string[] = [];


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
        //this.saveLocalStorage();
    }



    searchTag(tag: string): void {

        if (tag.length === 0) return;
        this.organizeHistory(tag);

    }
}