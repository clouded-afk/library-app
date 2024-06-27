const myLibrary = [
    {
        title : "The Assassin's Blade",
        author : "Sarah J. Maas",
        pageCount : 435,
        read : false
    },
    {
        title : "Throne of Glass",
        author : "Sarah J. Maas",
        pageCount : 406,
        read : false
    },
    {
        title : "Fourth Wing",
        author : "Rebecca Yarros",
        pageCount : 518,
        read : false
    }
];

function Book(title, author, pageCount, read) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.read = read;
}