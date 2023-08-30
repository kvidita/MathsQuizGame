# Todo for Requirements

---

### UI changes

- reduce shadow of quiz-box
- play quiz button should be large
- appropriate padding for quiz-section
- aligning player's stats
- increase size of answer box

### player entity

```
#### Player (done)
  fields:
    name;(constructor)
    password;(constructor)
    matchPlayed;
    score;
    currentStats;
    questionsAttempted;

  getters:
    name;
    password;
    currentStats;
    questionsAttempted;

  methods:
    updateCurrentMatchResult;

```

### players entity

```
#### Players
```

### storage entity

```
UserStorage
  fields:
    storagePath;
    fileReader;
    fileWriter;

  methods:
    store;
    restore;
```

### User data

```
Storage:
  Players:
    {
      playerId1:  {
                    name:"vidita",
                    password: "124",
                    questionAttempted: [{question, answer, response}],
                    currentStat:  {
                                    name: "vidita"
                                    matchPlayed:2,
                                    score: 20
                                  }
                  }
    }
```

---

## Requirement 1

---

### mini-requirements

[X] create a home page for users
[X] provide a register button for user
[X] allow user to register using name and a password
[X] create a controller on client side

---

### Entities

---

#### Player

```
Player
  fields:-
    name
    password
    questionsAttempted
    current stats = {name, matchPlayed, score}

  methods:-
    getters:-
      name
      password
    other:-
      currentStats

```
