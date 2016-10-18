#!/usr/bin/env bash

echo "**********************************************"
echo "I am starting provisioning "
echo $1
echo "**********************************************"

echo '>>> Creating swapfile'
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
sudo sh -c 'echo "/swapfile none swap sw 0 0" >> /etc/fstab'

echo "**********************************************"
echo "Set some localisation "
echo "**********************************************"
sudo locale-gen UTF-8

echo "**********************************************"
echo "Upgrade apt-get"
echo "**********************************************"

# Update package system list of available packages
sudo apt-get update
# Upgrade packages
sudo apt-get dist-upgrade


echo "**********************************************"
echo "Delete some apt-get stuff"
echo "**********************************************"

sudo apt-get autoremove -y

# install make
sudo apt-get install make

echo "**********************************************"
echo "Installing node"
echo "**********************************************"

# Nodejs and npm

curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs

# npm build tools
sudo apt-get install -y build-essential

# install nodemon
sudo npm install -g nodemon --no-optional

echo "**********************************************"
echo "Install server npm packages"
echo "**********************************************"

# Install npm packs for server
# sudo npm config set loglevel info
cd /vagrant/server
make install

echo "**********************************************"
echo "Build client website"
echo "**********************************************"

cd /vagrant/client
sudo npm rebuild node-sass
# sudo npm install -g react-tools
sudo npm install
make build

echo "**********************************************"
echo "Create some folders"
echo "**********************************************"

cd /vagrant/
pwd
MY_DIR=$(pwd)
export MY_DIR
date > /etc/vagrant_provisioned_at

mkdir -p /vagrant/server/tmp/
mkdir -p /vagrant/server/logs/

echo "**********************************************"
echo "Install supervisord"
echo "**********************************************"

sudo apt-get install python-setuptools
sudo easy_install supervisor

if [ "$1" == "dev-mode" ]
then
	echo "**********************************************"
	echo "Starting node server in dev-mode"
	echo "**********************************************"

	# install entr
	sudo apt-get install entr
	# cd /vagrant/client
	# make watch-static

	cd /vagrant/server
	sudo nodemon -w routes server &
else
	echo "**********************************************"
	echo "Starting supervisord"
	echo "**********************************************"
	# start supervisord that will start the server
	sudo supervisord -c /vagrant/supervisord.conf
fi

echo "**********************************************"
echo "Done provisioning..."
echo "**********************************************"
