# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|

    config.vm.provider "virtualbox" do |vb, override|
        vb.memory = "1024"

        override.vm.box = "ubuntu/trusty64"
        override.vm.network "forwarded_port", guest: 80, host: 2000
    end

    config.vm.provider "digital_ocean" do |provider, override|
        override.vm.synced_folder "./", "/vagrant"
        override.vm.box = "digital_ocean"
        override.ssh.private_key_path = "~/.ssh/id_rsa"
        override.ssh_key_name = "Mr-Kjems"

        provider.image = "ubuntu-14-04-x64"
        provider.region = "ams2"
        provider.token = ENV['DIGITAL_OCEAN_TOKEN']

        # provider.api_key = "fe9d34749e6a5493bc2ddbe393d115ab"
        # provider.client_id = "f1ac086b6bd870ec817c8a9dfa0f9097"

    end

    config.vm.provision "shell", path: "provision.sh" , args: ENV['PROVISION_ARGS']
end
