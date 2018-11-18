# Twilight Sparkle Leaderboard
Online Leaderboard of [Twilight Sparkle](https://twilightbot.eu/invite) showing the Top 200 players with Levels, Money, Items, Gems, Votes and Bonbons worldwide.
Offical Site: https://twilightbot.eu/leaderboard

A mobile version for the site with better performance on phones and tablets will be added soon.

You can use this leaderboard for whatever you want and edit and recode it as much as you need.
Just, please don't claim it as your own creation and keep to the included license.

Want to use my Discord Bot? You can invite it [here](https://twilightbot.eu/invite).

![Screenshot of the Leaderboard Page](https://twilightbot.eu/images/Screenshot-Leaderboard.png)

# Examples

Importing Leaderboard API:
```javascript
<head>
  ...
  <!-- Fetching Leaderboard from TwilightBot API -->
  <script type="text/javascript" src="https://twilightbot.eu/api/leaderboard.js"></script>
  ...
</head>
```

Navigation bar with countdown:
```javascript
<div class="navbar">
  <a href="https://twilightbot.eu/">Home</a>
  <a href="https://twilightbot.eu/docs">Docs</a>
  ...
</div>

<div class='time-to'>
  Leaderboard Refresh in:
  <p id="timer">
</div>
```

Left column with information box:
```javascript
<div class="container">
  <div class="col1">
    <div class="boxed">
      <h1><u>How it works</u></h1>
      <p>
        ...
        <br><br>
        ...
      </p>
    </div>
  </div>
  ...
</div>
```

Right colum with leaderboard table:
```javascript
<div class="container">
  ...
  <div class="col2">
    <div id="level-lb">
      <table>
        <thead>
            <th>Rank</th>
            <th>Username</th>
            <th>EXP</th>
            <th>Level</th>
        </thead>
        <tbody>
          <tfoot id="level-table">
            <tr><td>Loading...</td><td><td><td></tr>
          </tfoot>
        </tbody>
      </table>
    </div>

    <div id="money-lb" style="display: none;">
      ...
    </div>

    ...

  </div>
</div>
```