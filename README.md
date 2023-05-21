# Action Pals

## [Action Pals Live Link](https://actionpals-aa2f0.web.app)
- https://actionpals-aa2f0.web.app


## A Toy selling website 
 1.  This website allows toy selling options for micro seller.
 2. In the front page latest product can be seen and it is fetch via a special api call 
 3. In the shop by category tab section you can see different category's latest product. Only the latest 3 product will be shown here. this is done by context api to manage state and load data by separte api call 
 4. In the home page top rated (5 star ) rated latest products are show via a separate api call and shown with a minimalistic image gallery slider.

 5. In the all toys page all toys are shown in a tabular form where latest item will be shown first with a limit of `20`. Limit can be increase by `50, 100 or all` products.
 6. A search result is implementen which will perform search on `title` only. search can be triggered by `3` ways i. debounce effect (5 second after stop typing) ii. Presseing `Enter` key after typing and iii. Hitting serarch button. 
 when hitting the search it will refetch from the server the approprite result and will render in the dom. 

7. In the my toys page only the logged in seller will be seen their products. One can't see other products here. Seller can delete any product and on edit `price ` , `available quantity` and `short description of the product` by clicking the edit button. One seller can't edit or delete other's product.

8. In a Add a toy page Seller can add a toy to sell in this platform and seller name and email and adding date will be automatically saved in the server. 

9. In the user profile page seller can see their profile and can edit name and photo by putting photo url.

10. `My Toys`, `Add a Toy`, `User Profile`, `Edit Toy` pages are private only logged in user can see this page and reloading the page will cause loading a spinner untile the authentication process complete.

11. In footer some links are added not all links are available right now, will be available very soon. 

12. Without being singned in if any one try to visit protected page they will be redirect to log in page and after successfully logged in they will be redirect to the page they wanted to visit 





------------------------------------------




### [`Client Side Private Repo Link`](https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-client-side-hasankarim18)
Click here for the private repo: [https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-client-side-hasankarim18](https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-client-side-hasankarim18)



### [`Server Side Private Repo Link`](https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-server-side-hasankarim18)
Click here for the private repo: [https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-server-side-hasankarim18](https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-server-side-hasankarim18)
