# Award | Event Handler

## Installation
> `npm install award.js --save`
> `yarn add award.js`

```js
const Award = require("award.js");

const awardClient = new Award({
	guild: "911264853086318702", // Server ID to listen to events
	intents: [
      "BOOST",
      "UNBOOST",
      "GIVEAWAY_JOIN",
      "GIVEAWAY_FINISH",
      "GIVEAWAY_REROLL",
      "GIVEAWAY_CREATE",
	] // Join our Discord server to intents list and event names
});

awardClient.on("ready", () => {
	console.log("Connected to Giftix, listening events...");
});

awardClient.on("boost", ({ user }) => {
	// You can give a role to the user.
	console.log(`${user.username} boosted our server!`);
});

awardClient.on("unboost", ({ user }) => {
	console.log(`${user.username} remove the boost from server. :(`);
});

awardClient.on("giveawayJoin", ({ user, giveaway }) => {
	console.log(`${user.username} joined the ${giveaway.title} giveaway.`);
});

awardClient.on("giveawayFinish", ({ giveaway, winners }) => {
	console.log(`${giveaway.title} has been ended. Winners: ${winners.map(_w => _w.id).join(",")}`);
});

awardClient.on("giveawayReroll", ({ giveaway, winners }) => {
	console.log(`${giveaway.title} has been rerolled. New Winners: ${winners.map(_w => _w.id).join(",")}`);
});

awardClient.on("giveawayDelete", ({ giveaway })  => {
	console.log(`${giveaway.title} has been deleted.`);
});
```

## Developers
<table>
   <tr>
      <td align="center"><a href="https://github.com/swothh">
        <img src="https://github.com/swothh.png?size=100" width="100px;" alt=""/>
        <br />
        <sub><b>Swoth</b></sub></a><br />
     </td>
      <td align="center"><a href="https://github.com/clqu">
        <img src="https://github.com/clqu.png?size=100" width="100px;" alt=""/>
        <br />
        <sub><b>clqu</b></sub></a><br />
     </td>
   </tr>
</table>


## ⭐ Star
 - Don't forget to star this repo for support :)
