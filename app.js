//Book Class: Represents a BOOK
class Intern{
    constructor(title, link, url){
        this.title = title;
        this.link = link;
        this.url = url;
    }
}
//UI Class: Handle UI tasks
class UI {
    static displayinterns() {
        const StoredInterns = [
            {
                title: 'intern one',
                link: 'asd',
                url: 'wre'
            },
            {
                title: 'intern two',
                link: 'ad',
                url: 'we'
            }
        ];

        const interns = StoredInterns;

        interns.forEach((intern) => UI.addInternToList(intern));

    }

    static addInternToList(intern) {
        const list = document.querySelector('#book-list')

        const roe = document.createElement('tr')

        row.innerHTML = `
            <td>${intern.title}</td>
        `;
    }
}
// Store Class: Handles storage