*Welcome, and thank you for contributing to this project. Please take your time to study this document carefully before making any changes to the codebase to ensure we're on the same page and we can all collaborate seamlessly.*   

# Workflow
This project uses the [Fork & Pull Model](https://help.github.com/en/articles/about-collaborative-development-models) 
for receiving contributions. Read about the Fork & Pull Model 
[here](https://help.github.com/en/articles/about-collaborative-development-models).     

#### How To Contribute
After setting up your fork on github and cloning it locally on your system, you'll need to run a command just once to create a connection between your local repository and the remote upstream repository. Note that there's automatically a remote 'origin' repository set up when you clone. This points to your fork. Now you need to set up 'upstream' which will point to the central upstream repo.

0. Open a terminal and go into the directory for the newly cloned repo. Now add the upstream remote like so:        
    <pre>git remote add upstream git://github.com/TEAM-NAME/REPO-NAME.git</pre>
PS: *You may get an error saying the `upstream` remote has already been configured. If so, then you are good to go.*   

Now you're all set up.      
__*The following steps must be run periodically to keep your work up-to-date! You can run these commands as often as every hour. You want to fetch any new changes as soon as possible. Each time you want to begin working, or take a break from your work, run these first.*__     
Be sure to [stash](https://dev.to/neshaz/how-to-git-stash-your-work-the-correct-way-cna) 
or commit all local changes first. 
 
1. Switch to your feature branch.        
    <pre>git checkout -b your-feature-branch</pre>        
2. Merge the changes on the newly merged master branch, into your feature branch.        
    <pre>git merge master</pre>
    *You may encounter merge conflicts here.
    [Resolve them](https://help.github.com/en/articles/resolving-a-merge-conflict-using-the-command-line),
    then come back and complete the merge. If you merge often enough, any conflicts would be trivial and very few.*

3. Finally, push your newly merged feature branch to the remote github server for backup.
    <pre>git push origin your-feature-branch</pre>   
