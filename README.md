# OneWayLinkedListLibJs

A simple one way linked list that stores the head, tail and length of the list

<img src="OneWayLinkedListLibJs.png" width="256"/>

This library was created, not only for education purposes, but to be a fast, effiecient and easy to use one way linked list library, which are perfect for things like ECS.

## Explanation of the Example

An example of its usage is available in the [example](https://github.com/RandomGamingDev/OneWayLinkedListLibJs/tree/main/example) folder which shows of a list of the 7 colors of the rainbow that gets expanded by interpolating between 2 colors in the spots between 2 colors until there are over 1000 colors in the list which helps to display how performant and sleek a linked list can make your code (and this isn't even the best case for linked lists!) (The counter examples using regular lists instead can be found in the [counter-examples](https://github.com/RandomGamingDev/OneWayLinkedListLibJs/tree/main/example) folder). Using regular lists and inserting into them results in code that's significantly slower. In my testing with just going over 1000 it's already more than 2x slower, and with large enough sets (like just 1 million) it can't even compute where the linked list can without freezing the browser!<br/>
Also yes, in this specific case, based on the information given, and the requirement of having an interpolation list each time you can create more performant code with a regular list by making a whole new list, but had the condition for insertion been one that's slightly different with less information given, especially for more complex cases, and especially for cases where they don't share the same time complexity (in this case they both of a time complexity of O(n) because of the uniform nature of the way we're doing this color interpolation for the entire list), linked list can often provide a performance benefit based on your use case! There's also the advantage of clean and concise code since insertion in the linked list version is handled like this:
```js
for (let node = list.head; node.next != null; node = node.next.next)
  list.insert(node, lerpColor(node.data, node.next.data, 0.5));
```
All this is doing is inserting the interpolation of the current node and next one in the list as the item behind the node you're currently at and then skipping the newly placed node to the next node and repeating until the end. <br/>
When using lists for the performance boost (~50% in my testing on my PC with a fast CPU and significantly slower RAM, but ~20% on my phone, with the difference in performance varying based on device)
```js
const new_list = new Array(2 * colors.length - 1);
for (let i = 0; i < colors.length - 1; i++) {
  new_list[2 * i] = colors[i];
  new_list[2 * i + 1] = lerpColor(colors[i], colors[i + 1], 0.5);
}
new_list[new_list.length - 1] = colors[colors.length - 1];
colors = new_list;
```
As you can see, the performance difference is a lot less compared to the linked list against list insertion, and it relies on a lot of data that we're only able to assume because of how specific this case is while resulting in code that's a lot less clean.

## How to import

To use it you can simply include https://cdn.jsdelivr.net/gh/RandomGamingDev/OneWayLinkedListLibJs/list.js
in your HTML file! If you want to you can also just download the file and include it in your HTML file that way.

btw stuff updates so remember to specify a version/commit for your library if you want to use a link and don't want your code to automatically update to the newest version of the library
