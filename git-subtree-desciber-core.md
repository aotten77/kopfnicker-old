Initial:

git remote add -f describer-core_remote https://github.com/describerjs/describer-core.git

git subtree add --prefix=js/describer-core describer-core_remote/master --squash


push subtree:

git subtree push --prefix=js/describer-core describer-core_remote master --squash


pull subtree:

git subtree pull --prefix=js/describer-core describer-core_remote master --squash


diff changes remote-master < - > subtree on develop:

git diff describer-core_remote/master develop:js/describer-core
