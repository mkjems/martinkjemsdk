# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure(2) do |config|

    # Every Vagrant development environment requires a box. You can search for
    # boxes at https://atlas.hashicorp.com/search.
    config.vm.box = "digital_ocean"
    config.ssh.private_key_path = "~/.ssh/id_rsa"

    config.vm.provider :digital_ocean do |provider, override|
        provider.client_id = "f1ac086b6bd870ec817c8a9dfa0f9097"
        provider.api_key = "fe9d34749e6a5493bc2ddbe393d115ab"
        provider.image = "ubuntu-14-10-x64"
        provider.region = "ams2"
        provider.token = ENV['DIGITAL_OCEAN_TOKEN']
        provider.ssh_key_name = "Mr-Kjems"
        override.vm.synced_folder "./", "/vagrant"
    end

    # Create a forwarded port mapping which allows access to a specific port
    # within the machine from a port on the host machine. In the example below,
    # accessing "localhost:8080" will access port 80 on the guest machine.
    #config.vm.network "forwarded_port", guest: 8080, host: 80

    # Create a private network, which allows host-only access to the machine
    # using a specific IP.
    # config.vm.network "private_network", ip: "192.168.33.10"

    # Create a public network, which generally matched to bridged network.
    # Bridged networks make the machine appear as another physical device on
    # your network.
    # config.vm.network "public_network"

    config.vm.provider "virtualbox" do |vb, override|
    	# Display the VirtualBox GUI when booting the machine
    	#vb.gui = true
    	override.vm.box = 'bunchc/utopic-x64'
    	#override.vm.box = 'chef/ubuntu-14.10'
    	# Customize the amount of memory on the VM:
    	vb.memory = "1024"
    	override.vm.network "forwarded_port", guest: 80, host: 2000
    end

    # Enable provisioning with a shell script. Additional provisioners such as
    # Puppet, Chef, Ansible, Salt, and Docker are also available. Please see the
    # documentation for more information about their specific syntax and use.
    config.vm.provision "shell", path: "provision.sh"

end
