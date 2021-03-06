# Koapp Woocommerce Connection v1.1.2

This library is used for communicating a Woocommerce Shop from Wordpress with the koapp Woocommerce modules.

## Retrieve data from the Store

```javascript
getProducts()                     // Returns the 10 last products from the store
getMoreProducts(offset)           // Returns 10 products starting from a given index
getProductById(id)                // Returns a product with the given id
getProductReviews(id)             // Returns reviews from the product with the given id
getProductByCategory(category)    // Returns products with the given category
getMoreProductsByCategory(offset) // Returns 10 products starting from a given index
getProductByTag(tag)              // Returns products with the given tag
getProductAttributes(attributes)  // Returns products with the given attributes
getCategories()                   // Returns product's categories
getProductBySearch(query)         // Returns product's by query
getOrder(id)                      // Returns an order with the given id
createOrder(orderItem)            // Creates an order with the given orderItems
```

## Cart management

```javascript
getCart()              // Returns cart from localStorage
addCartItem(item)      // Stores an item in the localStorage cart
editCart(id, quantity) // Edits quantity from the product with the given id an updates the localStorage cart
deleteCartItem(id)     // Deletes the product with the given id from the localStorage cart
resetCart()            // Resets cart from localStorage
```
