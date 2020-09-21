To get more help on the Angular CLI use ng help or go check out the Angular CLI README.

Explanation:

This app contains one root model and the four components.

1. header component:
        contains the nav-bar and related navigations.
        
2. table component: 
        table will render and all the necessary logics (table actions, ex: delete edit)  contains here

3. footer component: 
        contains the footer details.
        
4. main component: 
        It is the parent component which holds above 3 components
Service: One common service is created in which Http request for the API is called.

Router: basic route module which routes to '/data-table' and wildcard for the route is pointing to the '/data-table' page
