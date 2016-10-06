# martinkjemsdk

##Technologies used in this project

Vagrant - Virtual machines

React - Fancy templates du jour

```sh
  npm install -g react-tools
```

Entr - file watcher

```sh
   brew install entr
```

## Operation

Start the server for local development inside virtualbox with:

```sh
    PROVISION_ARGS='dev-mode' vagrant up --provider=virtualbox
```

dev-mode restarts the server when server code changes.
Normaly supervisord just starts the server and keeps it running, but this is ot so nice for dev.

To deploy it on my website:

```
	vagrant destroy --provider=digital_ocean
	vagrant up --provider=digital_ocean --provision
```

## Insightfull links on the topic of this project
http://stackoverflow.com/questions/10930286/socket-io-rooms-or-namespacing
