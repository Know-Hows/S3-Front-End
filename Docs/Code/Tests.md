# **Components Documentation**
This document gives insight on how the tests are structured.

The tests in this project are used to ensure that components are doing what is expected of them by creating various scenarios that a test puts the component through and seeing the response.

<br><br>

## **Reading guide**
- [Create Article component](#create-article-component)
- [Embed Component](#embed-component)

<br><br>

-------------------------------------------------------------------------------------

### **Create Article component**

The test file for this component is made up of two tests, both of which explore the good flows that the component can experience.

The first test, called 'Should render CreateArticleComponent', ensures that the visual part of this component renders properly by checking whether specific features can be found in a virtual render of the component.

The second test, called 'Should create article with title from input after pressing make article button', is a bit more complex, running through the full process of creating a new article in a fake environment to ensure that data inputted by the user is properly transferred to the final uploaded article.

### **Embed component**

The test file for the Embed component is made up of 6 tests exploring various good flows of the component. Three of these tests are quite similar, each inputting a preset text including a link of a differing type and ensuring it is properly adjusted by checking whether the outputted text contains specific parts.

Additionally, there is a test to make sure that a text with two different types of links still works properly, as well as a test to do the same for text without links as well as empty text.


<br><br>

