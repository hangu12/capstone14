# Capstone14

Conestoga Capstone Project for Group 14

## Getting Started


```
git clone https://your_token@github.com/hangu12/capstone14.git
cd capstone14
```

Probably, you don't have to run npm install. I've already commit all the node_modules. 

for dev, (npm run dev is not work anymore)
```
npm start
```

```
cd client 
npm start 
```

it will ask you to use another port 
say yes, then you will be using 3001 port for client. 

go to localhost:3001

## Git

### Config (only one time)
Paste below code to your C:/username/.gitconfig 

```
[alias]
  co = checkout
  br = branch
  ci = commit
  st = status
  cp = cherry-pick
  logp = log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit
```

### Write code 
Always start with newe branch 

```
git co -b name_0804
git br    // make sure you're in the branch
```

Do you changes 

```
git add -A
git ci -a -m "your commit message"
```

```
git st    
```
You'll see no unstaged changes 

```
git logp
```
Make sure you have your commit in the git log
and copy & paste the `commit hash` to your notepad


### Make a base 

```
git co main
git fetch origin
git reset --hard origin/main
```
This will overwrite your main branch with remote main branch in github.

```
git cp commithash   // commit hash you have copied before
```

#### If you have conflict, try to do below (skip this if you don't have conflict) 
```
git st  // see what code has conflict 
```

open the conflict file and fix the conflict 

```
git add -A
git cp --continue
```


### Commit and push 

```
git st   // make sure no unstaged changes
git logp  // make sure you have your commit in you git log
git push origin   // push to remote (github)
```

## Deploy to heroku 
```
npm run build 
git push heroku master
```

## Due date 
- Notify team if you have any issues.
- Support and move on after due date. 


## Owner
 
### Code
Front-end: Hangu, Nimesh
- React setup 
- HTML/CSS
- Accessibility

Back-end: Baljit, Vishav
- DB scheme (setup db, create tables, etc.)
- API server setup 
- Authenticated - Login related. 

### Deploy - Hangu 

### Logo Design - ??

## Website Topic
- Used item share website. 
  - users can upload their items. 
  - others can see, search, like 
  - can add comment 
  - user can choose 
  - Board style website - not complicated, no payment method.
  - Authentication. (Login)

# Information 

## Sprints 
1. 4 days
2. 5 days 
3. 6 days 
4. 3 days (finalize project)

## Website Requirements: 
1.    Fully responsive
2.    Implements a database with MongoDB or SQL
3.    Database must be significant and store data for multiple use cases
4.    Implements server-side scripting, whether with Node.js, ASP, PHP, or something else
5.    Contains significant client-side functionality using a JavaScript framework such as Angular or React
6.    Structured with a standard design pattern such as MVC, or MVVM
7.    Contains validation and other measures to provide security
8.    Contains some technology that you did not learn in the program
9.    Readable code
10.    Hosted online, not locally
11.    Feature rich and compelling
12.    Design for Accessibility
13.    Website should "solve a problem"
14.    Any other requirements as detailed in other documents. Create your own checklist.

