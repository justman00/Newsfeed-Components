// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class.
    this.expandButton = domElement.querySelector(".expandButton");
    // read button
    this.readButton = domElement.querySelector(".readButton");
    // console.log(this.readButton);
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = "Click to Expand";

    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener("click", () => this.expandArticle());
    // event listener calling removeArticle
    this.readButton.addEventListener("click", () => this.removeArticle());
  }

  removeArticle() {
    this.domElement.classList.add("read");
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    // articles.forEach(article => {
    //   if (article.classList.contains("article-open")) {
    //     article.classList.remove("article-open");
    //   }
    // });
    // this.domElement.classList.toggle("article-open");
    const arrArticles = Array.from(articles);
    arrArticles.splice(arrArticles.indexOf(this.domElement), 1);
    // console.log(arrArticles);
    for (let i = 0; i < arrArticles.length; i++) {
      arrArticles[i].classList.remove("article-open");
      arrArticles[i].classList.add("article-close");
    }
    if (this.domElement.classList.contains("article-open")) {
      this.domElement.classList.remove("article-open");
      this.domElement.classList.add("article-close");
      this.expandButton.textContent = "Click to Expand";
    } else if (this.domElement.classList.contains("article-close")) {
      this.domElement.classList.remove("article-close");
      this.domElement.classList.add("article-open");
      this.expandButton.textContent = "Click to Close";
    } else {
      // console.log("got here");
      // console.log(this.domElement.classList);
      this.domElement.classList.add("article-open");
      this.expandButton.textContent = "Click to Close";
    }
    for (let i = 0; i < arrArticles.length; i++) {
      arrArticles[i].querySelector(".expandButton").textContent =
        "Click to Expand";
    }
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

let articles = document.querySelectorAll(".article");
articles.forEach(article => {
  return new Article(article);
});
