# The Architect Hunt: A Journey to Find Bonanno

Given an HTML file containing a list of unknown people. Some are architects, some are not, some are classical, and only one of them is Bonanno Pisano. Your task is to write several functions that will help you isolate and identify this architect.

Each function will return a list of filtered HTML elements based on the given criteria. Follow the elimination process carefully to solve the problem.

### Requirements:

1. Write the function `getArchitects`: This function should return an array containing two arrays:

- The first array includes all architects (<a> tags).
- The second array includes all non-architects.

2. Write the function `getClassical`: This function should return an array containing two arrays:

- The first array includes all classical architects (those belonging to the classical class).
- The second array includes all non-classical architects.

3. Write the function `getActive`: This function should return an array containing two arrays:

- The first array includes all active classical architects (those with the active class).
- The second array includes all inactive classical architects.

4. Write the function `getBonannoPisano`: This function should return an array containing two elements:

- The first element is the HTML element for the architect Bonanno Pisano (whose id is "BonannoPisano").
- The second element is an array containing the remaining active classical architects (excluding Bonanno Pisano).

### Example HTML:

```html
<ul id="people">
  <li>
    <a class="architect classical active" id="BonannoPisano">Bonanno Pisano</a>
  </li>
  <li><a class="architect classical active">Giovanni</a></li>
  <li><a class="architect classical">Filippo</a></li>
  <li><a class="architect">Andrea</a></li>
  <li><span>Leonardo</span></li>
  <li><span>Galileo</span></li>
</ul>

<button onclick="getArchitects()">Get Architects</button>
<button onclick="getClassical()">Get Classical Architects</button>
<button onclick="getActive()">Get Active Architects</button>
<button onclick="getBonannoPisano()">Get Bonanno Pisano</button>
```
