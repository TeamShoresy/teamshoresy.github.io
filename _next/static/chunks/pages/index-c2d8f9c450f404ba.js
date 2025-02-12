(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        5728: function(e, t, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return a(7292)
            }])
        },
        6118: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let o = a(5893);
            e.exports = [{
                id: 1,
                img: "./img/news/cloud_microchip.jpg",
                title: "Deeper into the Cloud: Using VMs on Google Compute Engine to Run a Python Script",
                date: "February 28, 2021",
                meta: "Technology",
                descriptionText1: (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)("p", {
                        children: "If you read my last post, you know that I tried to use Cloud Functions on Google Cloud Platform to run a python script that would scrape data from the web and write it to a BigQuery table. Unfortunately, that solution turned out not to work for my purposes, because Cloud Functions have a timeout at nine minutes, and my scraper would need to run for longer than that. So I decided to host and run my script on a Compute Engine VM (virtual machine) instance. I’ll outline how I did this and some things to watch out for below."
                    }), (0, o.jsx)("p", {
                        children: "Using the project that I had created before from the last post, I already had my BigQuery table set up and ready to go. I just needed to:"
                    }), (0, o.jsxs)("ul", {
                        children: [(0, o.jsx)("li", {
                            children: "Create a VM instance and set up the environment for my purposes"
                        }), (0, o.jsx)("li", {
                            children: "Get my python code on the instance"
                        }), (0, o.jsx)("li", {
                            children: "Automatically trigger the python script to run upon starting the VM"
                        }), (0, o.jsx)("li", {
                            children: "Create a schedule to start and stop the VM"
                        })]
                    }), (0, o.jsx)("p", {
                        children: (0, o.jsx)("strong", {
                            children: "Creating a Google Cloud VM"
                        })
                    }), (0, o.jsx)("p", {
                        children: "Google’s Compute Engine product allows you to spin up a virtual machine so that you can do all the things you would do on your local computer, on the cloud. GCE makes this very easy to do. In your specific project navigate to Compute Engine, and in the top you should see the option to “Create Instance”. Name your vm instance. The default settings should be fine to use; just change the region to be the one closest to you and pay attention to the machine configuration series and machine type. These settings determine how much compute and memory are allocated to your instance, and thus affect your cost of using the VM. The cheapest option would be to use the N1 series, f1 micro machine type. That’s it for now. Hit create and you now have a vm instance."
                    }), (0, o.jsx)("p", {
                        children: (0, o.jsx)("strong", {
                            children: "Get My Code on the Instance"
                        })
                    }), (0, o.jsx)("p", {
                        children: "You now have an instance….now what? Well, as I said before you should think of this as giving you the functionality of your local computer. The main difference is that you don’t have a pretty interface to navigate around and click on stuff to do what you want to do. You will need to connect by opening an SSH window. This will allow you to do everything you need by using linux commands. Again, this is not my forte. But, I’ll discuss some useful commands that will allow you to get stuff done."
                    }), (0, o.jsx)("p", {
                        children: "When your SSH window is open, you will notice that on the upper right hand side there is a gear. There you’ll have the option to upload files, so upload your python script as well as your requirements.txt (this should contain all the python modules that you will need to run your script, the same as the exercise we did for trying to get Cloud Functions up and running). You can check that your files are on the instance by typing the command below, which will give you a list of the files in the directory you are currently in."
                    }), (0, o.jsx)("div", {
                        className: "language-plaintext highlighter-rouge",
                        children: (0, o.jsx)("div", {
                            className: "highlight",
                            children: (0, o.jsx)("pre", {
                                className: "highlight",
                                children: (0, o.jsx)("code", {
                                    children: "ls -l"
                                })
                            })
                        })
                    }), (0, o.jsx)("p", {
                        children: "Now you have your necessary files, but your VM is a bank slate. You will need to install python and pip so that you can install packages."
                    }), (0, o.jsx)("div", {
                        className: "language-plaintext highlighter-rouge",
                        children: (0, o.jsx)("div", {
                            className: "highlight",
                            children: (0, o.jsx)("pre", {
                                className: "highlight",
                                children: (0, o.jsx)("code", {
                                    children: 'sudo apt-get install python3.7 sudo apt-get install python3-pip sudo curl "https://bootstrap.pypa.io/get-pip.py" -o "get-pip.py" sudo python3 get-pip.py'
                                })
                            })
                        })
                    }), (0, o.jsx)("p", {
                        children: "You can test to make sure you have python installed by typing python3 (use quit() to exit python). Now that python and pip are installed, you can install your required modules on the vm."
                    }), (0, o.jsx)("div", {
                        className: "language-plaintext highlighter-rouge",
                        children: (0, o.jsx)("div", {
                            className: "highlight",
                            children: (0, o.jsx)("pre", {
                                className: "highlight",
                                children: (0, o.jsx)("code", {
                                    children: "pip install -r requirements.txt"
                                })
                            })
                        })
                    }), (0, o.jsx)("p", {
                        children: "This is it! You can now run your python script in the SSH window and when it’s done you can check your BigQuery table, and you should see results there."
                    }), (0, o.jsx)("div", {
                        className: "language-plaintext highlighter-rouge",
                        children: (0, o.jsx)("div", {
                            className: "highlight",
                            children: (0, o.jsx)("pre", {
                                className: "highlight",
                                children: (0, o.jsx)("code", {
                                    children: "python3 mypythonscript.py"
                                })
                            })
                        })
                    }), (0, o.jsx)("p", {
                        children: "Note: if you need to open and/or edit your files on the vm, you can use nano text editor."
                    }), (0, o.jsx)("div", {
                        className: "language-plaintext highlighter-rouge",
                        children: (0, o.jsx)("div", {
                            className: "highlight",
                            children: (0, o.jsx)("pre", {
                                className: "highlight",
                                children: (0, o.jsx)("code", {
                                    children: "nano mypythonscript.py"
                                })
                            })
                        })
                    }), (0, o.jsx)("p", {
                        children: (0, o.jsx)("strong", {
                            children: "Automatically Run the Python Script Upon Starting the VM"
                        })
                    }), (0, o.jsx)("p", {
                        children: "As mentioned before, GCP is not free. For my purpose of running a python script once a day, I didn’t need my VM to be running all during the day, incurring costs. So my goal was to schedule the VM to start every day, have the python script run, and then shut the VM down. Luckily, GCE has the option to add a “startup-script” to your VM. It’s a script that tells the VM to perform certain actions every time it starts up. I’ve seen examples of the startup script being used to update software and other tasks like that, but all we want to do is to literally just run the python script. Google makes this easy, by allowing us to enter our startup script right in the configuration of the VM."
                    }), (0, o.jsx)("p", {
                        children: "Navigate back to your VM instances list and click on your VM name and then click edit. Scroll down and look for ‘Custom Metadata’. In the left hand box type ‘startup-script’. In the right hand box, type your script directly. Below is the script I used. The first line says that this is a shell script. The second line says to run my python script (be sure to write the full directory to the script. You can check the name of your working directory in SSH by typing ‘pwd’). The last line says to shut down the VM instance. Save your changes to the VM."
                    }), (0, o.jsx)("div", {
                        className: "language-plaintext highlighter-rouge",
                        children: (0, o.jsx)("div", {
                            className: "highlight",
                            children: (0, o.jsx)("pre", {
                                className: "highlight",
                                children: (0, o.jsx)("code", {
                                    children: "#! /bin/bash python3 /home/directory_name/mypythonscript.py shutdown -h now"
                                })
                            })
                        })
                    }), (0, o.jsxs)("p", {
                        children: ["Now if you were to shut down your instance and start it up, your script should automatically run and then your instance would shut itself down and you would see results in your BigQuery table. ", (0, o.jsx)("strong", {
                            children: "WRONG!"
                        }), " Unfortunately you will get some error if you do this. To check your startup script output:"]
                    }), (0, o.jsx)("div", {
                        className: "language-plaintext highlighter-rouge",
                        children: (0, o.jsx)("div", {
                            className: "highlight",
                            children: (0, o.jsx)("pre", {
                                className: "highlight",
                                children: (0, o.jsx)("code", {
                                    children: "sudo journalctl -u google-startup-scripts.service"
                                })
                            })
                        })
                    }), (0, o.jsx)("p", {
                        children: "This is because the startup script is not executed from your home path; it’s executed at the root directory. Which means that your installation of your python modules from the home directory, although it’s nice if you want to play around with your script and run things quickly while in SSH, those installations are not accessible at root. So you will need to install them at the root directory. Do this by navigating to the root, and installing the requirements.txt file."
                    }), (0, o.jsx)("div", {
                        className: "language-plaintext highlighter-rouge",
                        children: (0, o.jsx)("div", {
                            className: "highlight",
                            children: (0, o.jsx)("pre", {
                                className: "highlight",
                                children: (0, o.jsx)("code", {
                                    children: "sudo su root sudo pip install -r /home/directory_name/requirements.txt"
                                })
                            })
                        })
                    }), (0, o.jsx)("p", {
                        children: "Now this should do the trick. When you start your instance back up, it should run successfully, and data should populate your table."
                    }), (0, o.jsxs)("p", {
                        children: [(0, o.jsx)("strong", {
                            children: "Scheduling Your VM Instance to Start"
                        }), (0, o.jsx)("br", {}), "To round this whole thing off, we just need to schedule our VM instance to start automatically (we already have the stop part covered in the startup script). This involves adding a label to your instance that will correspond to a schedule you will create, as well as a cloud function you’ll create for the purpose of starting the VM. Google has great documentation on how to do this step by step, which you can find ", (0, o.jsx)("a", {
                            href: "https://cloud.google.com/scheduler/docs/start-and-stop-compute-engine-instances-on-a-schedule",
                            children: "here"
                        }), "."]
                    }), (0, o.jsx)("p", {
                        children: "You now have hosted a python script on a google virtual machine, which you have scheduled to start up at a certain cadence, run your script, and shut down the machine. That wasn’t so bad."
                    }), (0, o.jsx)("div", {
                        className: "share"
                    })]
                })
            }, {
                id: 2,
                img: "./img/news/clouds.jpg",
                title: "Journey to the Cloud with GCP",
                date: "February 21, 2021",
                meta: "Technology",
                descriptionText1: (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)("p", {
                        children: "I hate to admit it, but I’m the girl that when someone starts talking about module versions not matching, spinning up machines, creating tables, and the like, my eyes start to glaze over because I just don’t find that stuff interesting. I just want to dig into the data and not worry about what platform or environment is hosting it. However, as life would have it, I’m working on a project that, if I wanted to move forward with my goals, I needed to think about hosting it somewhere and start thinking about all that data engineering stuff. So, I decided to take the plunge and dive into Google Cloud Platform."
                    }), (0, o.jsx)("p", {
                        children: (0, o.jsx)("strong", {
                            children: "The Project"
                        })
                    }), (0, o.jsx)("p", {
                        children: "The short of it is that I wrote some python code that would scrape large amounts of data from the web and store it in csv files. I would then pull those csv files for use into an R shiny script to do some calculations and create a lovely Shiny dashboard. This worked fine on my local computer, but I wanted to be able to move away from my local computer in case I wanted to scale the project up and I also wanted to be able to schedule my python script to run on a daily basis without me having to push run every day."
                    }), (0, o.jsx)("p", {
                        children: (0, o.jsx)("strong", {
                            children: "Google Cloud Platform"
                        })
                    }), (0, o.jsx)("p", {
                        children: "I decided to try to host my script on GCP because, hey, it’s Google… And also it would be a valuable platform to be familiar with at my job. After doing some research, I decided on which GCP products would help me reach my goal. I would:"
                    }), (0, o.jsxs)("ul", {
                        children: [(0, o.jsx)("li", {
                            children: "Create an empty BigQuery table to store my data"
                        }), (0, o.jsx)("li", {
                            children: "Alter my python code so that it writes the scraped data to the BigQuery table, instead of a csv file"
                        }), (0, o.jsx)("li", {
                            children: "Wrap my python script in a Google Cloud Function"
                        }), (0, o.jsx)("li", {
                            children: "Use Cloud Schedule and Pub/Sub so that the function could be triggered to run in a serverless way, on a schedule"
                        })]
                    }), (0, o.jsx)("p", {
                        children: "I’m not going to walk you through every little step, but here are some things you should definitely watch out for that gave me a headache, and a gist of things you must do to achieve the steps I outlined above."
                    }), (0, o.jsx)("p", {
                        children: "First of all, everything you do in GCP will need to be tied to a project. This is important because GCP is a paid service depending on if you use resources beyond what they offer for free. So go ahead and create a project."
                    }), (0, o.jsx)("p", {
                        children: (0, o.jsx)("em", {
                            children: "Creating a BigQuery Table"
                        })
                    }), (0, o.jsx)("p", {
                        children: "Once you’ve created your project and navigated to BigQuery, you will see that you can create a dataset. You must create a dataset to create tables, so go ahead and do this. Then move forward with creating your table. I created an empty table, where I manually specified my table schema, but you can create a table from Google Cloud Storage, an upload, and other methods."
                    }), (0, o.jsxs)("p", {
                        children: [(0, o.jsx)("em", {
                            children: "Altering the Python Code"
                        }), (0, o.jsx)("br", {}), "If you want to write a pandas dataframe to a BigQuery table you need to import the bigquery module and use the function client.load_table_from_dataframe()"]
                    }), (0, o.jsx)("div", {
                        className: "language-plaintext highlighter-rouge",
                        children: (0, o.jsx)("div", {
                            className: "highlight",
                            children: (0, o.jsx)("pre", {
                                className: "highlight",
                                children: (0, o.jsx)("code", {
                                    children: "from google.cloud import bigquery client = bigquery.Client() client.load_table_from_dataframe(df, table_id, job_config)"
                                })
                            })
                        })
                    }), (0, o.jsx)("p", {
                        children: "That’s really it. You can look up the function to get details about the arguments that go into it, but this will allow you to load your pandas df to a BigQuery Table."
                    }), (0, o.jsxs)("p", {
                        children: [(0, o.jsx)("em", {
                            children: "Google Cloud Function"
                        }), (0, o.jsx)("br", {}), "This is how Google describes their cloud functions: a serverless execution environment for building and connecting cloud services. With Cloud Functions you write simple, single-purpose functions that are attached to events emitted from your cloud infrastructure and services. Your function is triggered when an event being watched is fired. Your code executes in a fully managed environment. Sounds good, right? So after navigating to Cloud Functions in your project, you can go ahead and create one."]
                    }), (0, o.jsxs)("ul", {
                        children: [(0, o.jsx)("li", {
                            children: "Specify what will trigger your function (I used Pub/Sub and this will prompt you to create a bucket in Google Cloud Storage that will be used for staging)"
                        }), (0, o.jsx)("li", {
                            children: "Specify your runtime (I used Python 3.7)"
                        }), (0, o.jsx)("li", {
                            children: "You’ll need to edit your python script again by wrapping it in a user defined function. Your function must have the arguments myfun(event, Context) and you will enter the name of your function as your entry point in the GCP console."
                        }), (0, o.jsx)("li", {
                            children: "You need to write a requirements.txt file in which you list which modules (and versions) you need for your main.py to run. Note that you may need to include modules that you don’t actually import into your python script. Below, pyarrow was necessary in my requirements file in order to load table from dataframe, but this module is not explicitly imported in my script. Example: google-cloud-bigquery>=2.7.0 pyarrow>=3.0.0 pandas >=0.25.3"
                        }), (0, o.jsx)("li", {
                            children: "Bring in your source code. I zipped my main.py and requirements.txt files and uploaded them. Once all of this is done, you can deploy the function. If that is successful, you can test your function, and once that is done you should see data populated in your BigQuery table!"
                        })]
                    }), (0, o.jsx)("p", {
                        children: "Getting my function to deploy was definitely not a one and done. I had to figure out a couple of errors, so here are some things to watch out for."
                    }), (0, o.jsxs)("ul", {
                        children: [(0, o.jsx)("li", {
                            children: "I kept getting an error: source code string cannot contain null bytes. I realized that some of the things I had in my requirements file was causing this. After removing modules like re, time, datetime,multiprocessing, logging and os, it got rid of this error. I think this is because these are part of the standard library. The ‘pip_download_wheels’ error may also be triggered by issues in the requirements file."
                        }), (0, o.jsx)("li", {
                            children: "I already mentioned including modules in your requirements file that some of your other modules may have dependencies on, such as pyarrow"
                        }), (0, o.jsx)("li", {
                            children: "Make sure your python script is called main.py. It will not work otherwise"
                        }), (0, o.jsx)("li", {
                            children: "This is basic, but can be a headache if missed…just make sure the spacing in your script is on point"
                        })]
                    }), (0, o.jsxs)("p", {
                        children: [(0, o.jsx)("em", {
                            children: "Schedule the Function to Run"
                        }), (0, o.jsx)("br", {}), "You can navigate to Cloud Scheduler to create a job. You’ll name it, describe what frequency you want the job to run by providing a string in “unix-cron” format, and you’ll enter the Pub/Sub topic name that you subscribed to in your function. Bam!"]
                    }), (0, o.jsxs)("p", {
                        children: [(0, o.jsx)("strong", {
                            children: "Wrapping it Up"
                        }), (0, o.jsx)("br", {}), "I have a confession to make! I never actually made it to the step of scheduling my function to run. My project required that I create two functions and write to two different tables. While one of my function tests worked successfully and did write my data to the table, the other one did not. This is because it continued to have a timeout error. After doing some checking, I realized that a ", (0, o.jsx)("strong", {
                            children: "Google Cloud Function has a max timeout setting of 9 minutes!"
                        }), " This means that if the python script that you’re trying to run in the function takes longer than that, it will never work properly. Considering I’m scraping loads of data, this solution is actually not the solution for me! Too bad I didn’t figure that out before diving so deep into Cloud Functions."]
                    }), (0, o.jsx)("p", {
                        children: "I believe there is a solution for me out there and that it lies in the Google Compute Engine product (spinning up virtual machines….oh no!). So that is what I’ll be exploring next."
                    }), (0, o.jsx)("div", {
                        className: "share"
                    })]
                })
            }, {
                id: 3,
                img: "./img/news/library-of-congress-WzPxmB_tRlw-unsplash.jpg",
                title: "Du Bois, Black Lives, and Data Storytelling",
                date: "September 20, 2020",
                meta: "Data",
                descriptionText1: (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)("p", {
                        children: "One hundred and twenty years ago W.E.B. Du Bois assembled a team and created an exhibit for the World’s Fair in Paris. His objective was to show the progress of African Americans 35 years after slavery through data visualization, photos, and artifacts, thus refuting prevailing beliefs of the time that blacks were subhuman. From a data perspective this is noteworthy because he was amongst the first sociologists to use engaging data visualizations and design to tell a story in service to social justice. From a life perspective this is interesting because 120 years later, black folks are still trying to prove our humanity; that our lives matter."
                    }), (0, o.jsx)("p", {
                        children: (0, o.jsx)("img", {
                            src: "https://www.dropbox.com/s/2j433xfnca3yxz0/dubois.jpg?raw=1",
                            alt: "DuBois"
                        })
                    }), (0, o.jsx)("p", {
                        children: (0, o.jsx)("strong", {
                            children: "Combatting Dominant Perceptions of Black Lives"
                        })
                    }), (0, o.jsx)("p", {
                        children: "Other than how sad and screwed up this reality is, Du Bois’s ‘American Negro Exhibit’ got me thinking about data storytelling and its limits. For context, Du Bois entered his exhibition on black life at a time when leading sociological thought pointed to the self-destruction and extinction of the race due to its inherent backwardness, violence, and inferiority. Most depictions of black and brown peoples of the world at these Fairs were of the exotic savage, placing these peoples in primitive villages in stark contrast to the modern industrial progress displayed in the other exhibits. These representations affirmed black and brown inferiority. So Du Bois aimed to tell a story with data that made the argument for the equality and sophistication of Black Americans despite living under Jim Crow and the legacy of slavery."
                    }), (0, o.jsx)("p", {
                        children: "The exhibit had two distinct parts that worked together to tell the entire story. Part I was a deep dive sociological study of ‘The Georgia Negro’. Georgia had the largest black population of any state at the time, and Du Bois and his team used it to illustrate Black progress since the Civil War. The second part of the exhibit, more national and global in its scope, was a series of statistical charts illustrating the condition of the descendants of former African slaves that were current residents of the US. He used statistics ranging from employment and education rates, population distributions across the nation, comparison of literacy rates between Black Americans and other countries, black ownership of property and land, and patents for black inventions to support his narrative."
                    }), (0, o.jsx)("p", {
                        children: (0, o.jsx)("strong", {
                            children: "The Limits of Data Storytelling"
                        })
                    }), (0, o.jsx)("p", {
                        children: "When we think about data storytelling, the key ingredients are said to be strong data, a compelling narrative, and engaging visualizations. Du Bois achieved all that in his Paris exhibit, and no doubt continued to tell this story throughout his life in his fight for social justice. Yet, here we are 120 years later and we can’t even get justice for Breonna Taylor."
                    }), (0, o.jsx)("p", {
                        children: "So why didn’t this narrative of black folks as human beings making progress despite tremendous hindrances stick? I think it’s a clear illustration of incentives. You can present a compelling story, but if your audience is more invested in the counter-narrative, it doesn’t matter how solid your anecdotes, how deep your data, or how beautiful and engaging your visualizations. White supremacy is a narrative that permeates our society which has allowed the exploitation of black lives and simultaneously the construction of an identity of superiority for those who can access white privilege. How can data storytelling possibly combat that? I’m not sure, but it’s obvious to me that perhaps we’ve been focused on trying to tell the wrong story and need to convey a different message."
                    }), (0, o.jsxs)("p", {
                        children: ["For more information on Du Bois’s exhibit, and to actually see the visualizations, check out the book ", (0, o.jsx)("em", {
                            children: "W.E.B. Du Bois’s Data Portraits: Visualizing Black America"
                        }), " by Silas Munro."]
                    }), (0, o.jsx)("div", {
                        className: "share"
                    })]
                })
            }, {
                id: 4,
                img: "./img/news/chi_el.jpg",
                title: "Exploring Chicago: Where Would You Live - Pt2",
                date: "May 26, 2020",
                meta: "Geospatial Analysis",
                descriptionText1: (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)("p", {
                        children: "In this post we’re going to continue to explore different areas of Chicago with the intention of bringing in data to support pros and cons of living in different areas of the city. I’ll be bringing in data on crime, business licenses, and CTA L access and looking at how these variables relate to the data we explored in the previous post (household income, race, and population)."
                    }), (0, o.jsx)("p", {
                        children: (0, o.jsx)("img", {
                            src: "https://www.dropbox.com/s/63bd55gphfh5wnq/Neighborhood_Map.png?raw=1",
                            alt: "neighborhood map"
                        })
                    }), (0, o.jsx)("p", {
                        children: (0, o.jsx)("strong", {
                            children: "Chiraq…? Quit It."
                        })
                    }), (0, o.jsx)("p", {
                        children: "There’s no use dodging it…Chicago has a huge reputation for crime. While the city does have some issues, I think that reputation is a bit unfair (maybe I’ll do a post about the data around this some other time). Furthermore, I ABSOLUTELY HATE the title “Chiraq”, which was coined by the media and popular culture because of the amount of reported murders. I’ve heard so many people say they wouldn’t visit Chicago because it’s too unsafe, so let’s explore that. This analysis can’t tell you if Chicago has an abnormally high amount of crime, because I’m only looking at crime counts over the past year, with nothing to compare it with. But I can tell you how crime plays out across the city."
                    }), (0, o.jsx)("p", {
                        children: (0, o.jsx)("img", {
                            src: "https://www.dropbox.com/s/z9bm2xmzszkbv17/all_crime_comm_map.png?raw=1",
                            alt: "perc of all crime by comm map"
                        })
                    }), (0, o.jsx)("p", {
                        children: "The map above shows the percent incidence of all crimes for each community area. Right away you can see that some areas such as Austin, the Near North Side, and the Loop stand out as accounting for a higher percentage of the city’s crimes than some of the other areas. This is interesting because from our prior analysis, we know that these areas are very different. Austin is majority black and has lower incomes whereas the Near North Side and Loop is largely white and has some of the highest median incomes in the city."
                    }), (0, o.jsx)("p", {
                        children: "If we look closer into the types of crimes, we see that different crimes are more prevalent in different parts of the city. Below, the map in green shows the incidences of theft, the purple map shows assaults, and the red map shows homicides. There are more thefts in the Loop and Near North Side than any other part of the city. Thefts in these two places make sense, as they are more affluent and more likely to attract tourists, which are ripe for pick-pockets and petty thefts. On the flip side there are more murders and assaults in Austin than other parts of the city. Unfortunately, the homicide map shows patterns akin to the map that highlighted areas of high black population percentages, i.e. more murders are happening in majority black areas than other parts of the city. Just for reference, thefts make up about 24% of the crimes in this data, assaults make up 8% and homicides make up .2% of crimes."
                    }), (0, o.jsx)("p", {
                        children: (0, o.jsx)("img", {
                            src: "https://www.dropbox.com/s/v8occpla58kiaei/3crime_maps.png?raw=1",
                            alt: "theft, homicide, and crime maps in a row"
                        })
                    }), (0, o.jsx)("p", {
                        children: "Homicides in any area is a problem that needs to be addressed. However, the data shows that outsider attitudes about Chicago being too dangerous may be overblown. Most out-of-towners go to the Loop, South Loop, Near North Side, Lakeview, and maybe Hyde Park. These areas have had little to no homicides in the past year."
                    }), (0, o.jsx)("p", {
                        children: (0, o.jsx)("strong", {
                            children: "The Happening Spots"
                        })
                    }), (0, o.jsx)("p", {
                        children: "I wanted to take a look at how certain business establishments are distributed across the city. When thinking about where to live, access to grocery stores, restaurants, and other forms of entertainment, may be an important factor. So I took a look at registered business licenses in Chicago. Below, you can see the number of business licenses for six groups that I targeted by community area."
                    }), (0, o.jsx)("p", {
                        children: (0, o.jsx)("img", {
                            src: "https://www.dropbox.com/s/k0lkxwyl3uikxjy/biz_license_barplot.png?raw=1",
                            alt: "biz license barplot"
                        })
                    }), (0, o.jsx)("p", {
                        children: "The usual suspects like the Loop, the Near North Side, and Lakeview appear to dominate in terms of number of these businesses, especially when it comes to entertainment establishments. Entertainment licenses include “Public Place of Amusement”, “Late Hour”, “Tavern”, “Music and Dance”, “Wrigley Field”, and, “Navy Pier Kiosk License”. The retail food licenses can include anything from a restaurant to a grocery store to a corner store. The maps below give us a better idea of how the businesses are distributed across the city spatially."
                    }), (0, o.jsx)("p", {
                        children: (0, o.jsx)("img", {
                            src: "https://www.dropbox.com/s/uqghlylz7nqv8s8/2_license_map.png?raw=1",
                            alt: "retail and entertainment map"
                        })
                    }), (0, o.jsx)("p", {
                        children: "Being on the lower end of the spectrum for licenses such as retail food doesn’t necessarily imply anything negative or positive about the neighborhood. Forest Glen, which we established had the highest average median household income is on the low end of the spectrum, but that’s just because it is very residential and mostly single family homes. Austin is in the middle of the spectrum for licenses, but is low income. One thing to think about though is if those areas that are on the low end of the spectrum have access to grocery stores. People living in more affluent Forest Glen most likely own cars, whereas some other areas that have lower incomes and not many retail food businesses may find it hard to access good food."
                    }), (0, o.jsx)("p", {
                        children: (0, o.jsx)("strong", {
                            children: "Getting Around"
                        })
                    }), (0, o.jsx)("p", {
                        children: "Living in Chicago, I never owned a car. I relied solely on the CTA L and bus system to get where I needed to go. The L was particularly important because it’s much faster and more reliable than the bus system. So I always made it a point to live within a 15 minute walk to a train station. That being said, I wanted to get a better idea of how the different neighborhoods are served in regards to access to an L station."
                    }), (0, o.jsx)("p", {
                        children: "It’s to be expected that the Loop will have heavier L coverage, because that is where most of the train lines converge. But if we take a look at the map below, it seems that the south side of the city has less train station accessibility than the north and west sides."
                    }), (0, o.jsx)("p", {
                        children: (0, o.jsx)("img", {
                            src: "https://www.dropbox.com/s/g4zn36hxoai3oub/comm_ctaL_map.png?raw=1",
                            alt: "map community L count"
                        })
                    }), (0, o.jsx)("p", {
                        children: "The next map shows train station distribution at the block group level and gives a rough idea of the train lines that run through the city."
                    }), (0, o.jsx)("p", {
                        children: (0, o.jsx)("img", {
                            src: "https://www.dropbox.com/s/7gxqjiaamvsg2oj/map_bg_L_with%20color%20lines.png?raw=1",
                            alt: "bg map with train lines"
                        })
                    }), (0, o.jsx)("p", {
                        children: "On one hand it can be argued that there is more train station accessibility in the more densely populated areas of the city. But considering that the Loop is the epicenter of jobs and the home of big companies in the city, it is a bit problematic that wide swaths of the south side would have more difficulty making it downtown due to the lack of close train stations."
                    }), (0, o.jsx)("p", {
                        children: (0, o.jsx)("strong", {
                            children: "Bringing It All Together"
                        })
                    }), (0, o.jsx)("p", {
                        children: "Over the course of the two posts, we’ve discussed income, race, population density, crime, businesses, and public transportation. Here are the main takeaways:"
                    }), (0, o.jsxs)("ul", {
                        children: [(0, o.jsx)("li", {
                            children: "Chicago is highly segregated by race, where black and white people generally don’t live in the same areas"
                        }), (0, o.jsx)("li", {
                            children: "Income is correlated with race – areas that are mostly white have much higher median incomes than areas that are mostly black"
                        }), (0, o.jsx)("li", {
                            children: "The north side of the city (not including the farther northwest reaches), which is mostly white is also more densely populated. These areas including the Near North Side, Lincoln Park, Lakeview, etc. also have the highest counts of business licenses in the city, particularly those related to entertainment. These areas also have good CTA L station coverage and high incidences of theft."
                        }), (0, o.jsx)("li", {
                            children: "The south side of the city, which is mostly black, is less densely populated and has less access to CTA L stations. It is largely lacking in business licenses, especially compared to its northern counterparts. When it comes to theft, this area is comparable to many other areas of the city, but has some of the higher incidences of assault and homicide in the city."
                        }), (0, o.jsx)("li", {
                            children: "In the west side of the city, which is largely black, the population density ranges from low to mid-range from block to block. It has some of the highest incidences of homicide and assault. Surprisingly, I would think that an area like Austin with its high crime and low incomes would be lacking in the number of businesses, but Austin has a mid-range level of retail food business licenses compared to the rest of the city. The west side in general has relatively good access to CTA L stations."
                        }), (0, o.jsx)("li", {
                            children: "There is an area of the city, the lower west side stretching out and down to West Lawn, that seems to be a bit more diverse, where it isn’t mostly white or mostly black. The incomes range from low to high-mid, and there is some CTA L coverage, although not a ton."
                        })]
                    }), (0, o.jsx)("p", {
                        children: "Below you can see how variables from the different data categories interact with one another."
                    }), (0, o.jsx)("p", {
                        children: (0, o.jsx)("img", {
                            src: "https://www.dropbox.com/s/f4ijjq02siawwf4/corrplot.png?raw=1",
                            alt: "corrplot"
                        })
                    }), (0, o.jsxs)("p", {
                        children: ["As we move into the final stage of this project, one thing to keep in mind is that even though we can make large generalizations about different neighborhoods in the city, Chicago does vary from block to block. Part III will focus on grouping similar block groups throughout the city, so that an individual would be able to identify blocks that best suit their living preferences.", (0, o.jsx)("br", {}), "Again, feel free to check out my code on ", (0, o.jsx)("a", {
                            href: "https://github.com/ljshores/Exploring_Chicago",
                            children: "github"
                        }), "."]
                    }), (0, o.jsxs)("p", {
                        children: ["Sources: ", (0, o.jsx)("br", {}), (0, o.jsx)("a", {
                            href: "https://data.cityofchicago.org/Facilities-Geographic-Boundaries/Boundaries-Community-Areas-current-/cauq-8yn6",
                            children: "https://data.cityofchicago.org/Facilities-Geographic-Boundaries/Boundaries-Community-Areas-current-/cauq-8yn6"
                        }), (0, o.jsx)("br", {}), (0, o.jsx)("a", {
                            href: "https://www.census.gov/cgi-bin/geo/shapefiles/index.php",
                            children: "https://www.census.gov/cgi-bin/geo/shapefiles/index.php"
                        }), (0, o.jsx)("br", {}), "2017 American Community Survey Data: ", (0, o.jsx)("a", {
                            href: "https://www.nhgis.org",
                            children: "https://www.nhgis.org"
                        }), (0, o.jsx)("br", {}), (0, o.jsx)("a", {
                            href: "https://data.cityofchicago.org/Community-Economic-Development/Business-Licenses-Current-Active/uupf-x98q",
                            children: "https://data.cityofchicago.org/Community-Economic-Development/Business-Licenses-Current-Active/uupf-x98q"
                        }), (0, o.jsx)("a", {
                            href: "https://data.cityofchicago.org/Public-Safety/Crimes-Map/dfnk-7re6",
                            children: "https://data.cityofchicago.org/Public-Safety/Crimes-Map/dfnk-7re6"
                        }), (0, o.jsx)("a", {
                            href: "https://data.cityofchicago.org/Transportation/CTA-System-Information-List-of-L-Stops/8pix-ypme",
                            children: "https://data.cityofchicago.org/Transportation/CTA-System-Information-List-of-L-Stops/8pix-ypme"
                        })]
                    }), (0, o.jsx)("div", {
                        className: "share"
                    })]
                })
            }, {
                id: 5,
                img: "./img/news/chi_night_river.jpg",
                title: "Exploring Chicago: Where Would You Live - Pt1",
                date: "May 18, 2020",
                meta: "Geospatial Analysis",
                descriptionText1: (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)("p", {
                        children: "A friend was telling me he was thinking about becoming a first-time homeowner in Chicago. We bantered back and forth about neighborhoods that were top contenders and the pros and cons of each. If you don’t live in Chicago, know that where you live in the city can yield totally different experiences, and those experiences can even vary from block to block. That prompted me to want to bring some data into the equation to fuel this conversation. I will do a three part analysis. In this post, I’ll analyze trends in demographic census data, and what they mean for the city. The next post will bring in city data such as business licenses and crime. Finally I’ll bring all these elements together in a tool that could assist an individual in identifying ideal areas for them."
                    }), (0, o.jsx)("p", {
                        children: "For this analysis I pulled census data at the census block group level for Cook County, Chicago. This data included variables on income, race, education, employment, and population, but I will only be focusing on income, race, and population in this post."
                    }), (0, o.jsx)("p", {
                        children: (0, o.jsx)("img", {
                            src: "https://www.dropbox.com/s/63bd55gphfh5wnq/Neighborhood_Map.png?raw=1",
                            alt: "neighborhood map"
                        })
                    }), (0, o.jsx)("p", {
                        children: (0, o.jsx)("strong", {
                            children: "Money Money Money"
                        })
                    }), (0, o.jsx)("p", {
                        children: "Do people who have similar income levels, live in the same places? My guess is yes, and I bet that greatly impacts the character of those spaces. I looked at median household income to gain some insight."
                    }), (0, o.jsx)("p", {
                        children: "Chicago block groups have median household incomes ranging from $6800 to over $210,000 and the median across all block groups is about $48K. That’s a huge range, and the median indicates that the majority of block groups are closer to the lower end than the higher. Looking at the histogram below, you can see how skewed the distribution of household income is across the different block groups."
                    }), (0, o.jsx)("p", {
                        children: (0, o.jsx)("img", {
                            src: "https://www.dropbox.com/s/jqz84krq1vdl2wa/income_histogram.png?raw=1",
                            alt: "income_histogram"
                        })
                    }), (0, o.jsx)("p", {
                        children: "Spatially, we can see that higher incomes are concentrated in certain parts of the city. The north side neighborhoods are mostly among the highest incomes, while the west and south sides are amongst the lowest. However, looking at the Chicago map colored at the block group level, we see that there are sprinkles of low income blocks on the north side and sprinkles of higher income blocks in the south side neighborhoods."
                    }), (0, o.jsxs)("p", {
                        children: [(0, o.jsx)("img", {
                            src: "https://www.dropbox.com/s/tdnsvwpai2qpcyh/cmnty_income_deciles_map.png?raw=1",
                            alt: "comm_inc_dec_map"
                        }), " ", (0, o.jsx)("img", {
                            src: "https://www.dropbox.com/s/zmczkqb6bt7j6cb/bg_income_deciles_map.png?raw=1",
                            alt: "bg inc dec map"
                        })]
                    }), (0, o.jsx)("p", {
                        children: "To drive home the point about household income diversity within neighborhoods, below you can see a boxplot of median household income by community area (CA). For each CA, the boxplot represents the distribution of incomes at the block group level. The line in the middle of the plot represents the median (50th percentile) of block group median household incomes for that CA, and the edges of the box represent the 25th and 75th income percentiles respectively. The communities are sorted from lowest average median household income to highest."
                    }), (0, o.jsx)("p", {
                        children: (0, o.jsx)("img", {
                            src: "https://www.dropbox.com/s/vp97kknohdsl1ve/cmnty-income-boxplot.png?raw=1",
                            alt: "cmnty-income-boxplot"
                        })
                    }), (0, o.jsx)("p", {
                        children: "One interesting observation is that lower income CA’s tend to have a smaller range of block group incomes, ie less income diversity, whereas the top income CA’s have a broader range of incomes. Take note of Lincoln Park, Near West Side, and Near South Side. These CA’s have block groups whose median household income range from $25K to upwards of $150K. For neighborhoods like Near West Side, this may have to do with the fact that it’s a larger neighborhood, or perhaps that that area, which used to be low-income as exemplified by previously housing the Cabrini-Green projects has faced a lot of gentrification, and so may be in a transitional phase. However, there may be something else going on here, since neighborhoods like Lincoln Park have long been established as being amongst the “nicer” neighborhoods."
                    }), (0, o.jsx)("p", {
                        children: (0, o.jsx)("strong", {
                            children: "Race"
                        })
                    }), (0, o.jsx)("p", {
                        children: "Chicago has a reputation for being amongst the most segregated cities in the US. When I looked at the data, this reputation was confirmed. I took the population counts by race for each block group and created a race population percent metric for white, black, and Asian groups. In the map below, we can see the percentage range of population by race for the three groups at the block group level. The white population percent map shows us lighter colored block groups on the north side, indicating that the north side neighborhoods have a higher percent of white population and we see nearly no white population (less than 10%) for many of the south and west side block groups, which are colored dark."
                    }), (0, o.jsx)("p", {
                        children: (0, o.jsx)("img", {
                            src: "https://www.dropbox.com/s/njxn14dy9ipgebo/race_percents_bg.png?raw=1",
                            alt: "race-percents-bg"
                        })
                    }), (0, o.jsx)("p", {
                        children: "The black population percent map is almost an inverse of the white one, where many of the south and west side block groups have 80%+ black populations. The Asian population percent map shows us that most block groups don’t have a concentration of Asian inhabitants. But there are some areas on the near west side that are mostly Asian (hi Chinatown!) and some small pockets on the north side that are about 30-60% Asian."
                    }), (0, o.jsx)("p", {
                        children: "One interesting observation from these maps is that it seems that the white population map shows more areas where the white population is more mid-range (40-70%) particularly in some of the southwest areas, whereas the black population map shows that for the most part, block groups are either overwhelmingly black, or barely black. This may say something about segregation policies in the city, which have historically shaped where black people live. Also, it’s worth noting that these map patterns for black and white are roughly on par with the map patterns for high and low income block groups."
                    }), (0, o.jsx)("p", {
                        children: "We can see the stark distribution spectrum for the black population in the histogram below as compared to the white population. The white population percentage median is close to 50% telling us that about half of the block groups have a population percentage above 50% and half below. The black population percentage median is closer to 10%, indicating that half the block groups have a black population that is less than 10%."
                    }), (0, o.jsx)("p", {
                        children: (0, o.jsx)("img", {
                            src: "https://www.dropbox.com/s/qdum5dxnw9nvo6n/race_histogram.png?raw=1",
                            alt: "race_histogram"
                        })
                    }), (0, o.jsx)("p", {
                        children: "Note, I know this race analysis is very much focused on black and white, but I wanted to outline the stark contrasts."
                    }), (0, o.jsx)("p", {
                        children: (0, o.jsx)("strong", {
                            children: "Population"
                        })
                    }), (0, o.jsx)("p", {
                        children: "The last variable that I wanted to look at was population density. Some neighborhoods are full of high rises, and some are basically all houses or small apartment buildings. I wanted to know if the density of people living in a certain square area could tell us anything about anything. Below you can see a map of the block groups grouped into deciles by their population density."
                    }), (0, o.jsx)("p", {
                        children: (0, o.jsx)("img", {
                            src: "https://www.dropbox.com/s/me1ayhl01e97o2a/popDensity_map.png?raw=1",
                            alt: "popDensityMap"
                        })
                    }), (0, o.jsx)("p", {
                        children: "I was a little surprised to see that many of the north side blocks had the higher population densities. If I think about it though, this makes sense considering that much of the north side is apartment living, very developed, and congested, whereas there are a lot more single family homes in other parts of the city. It was just surprising based on what we saw with income trends, since there’s usually an assumption that lower income areas are packed with people living in very close quarters."
                    }), (0, o.jsx)("p", {
                        children: (0, o.jsx)("strong", {
                            children: "Bringing it all Together"
                        })
                    }), (0, o.jsx)("p", {
                        children: "From looking at the three features, median household income, race, and population density, we can see some clear spatial trends in the city. Racial and income segregation seem to be quite real, and population density may say something about income levels, although not in the way that most people would think."
                    }), (0, o.jsx)("p", {
                        children: "Below you can see a correlation plot which ties these relationships together. The scatter plot of white population percent vs income shows a clear upwards relationship with a relatively strong correlation of .62, whereas the plot of black population percent vs. income shows a clear negative relationship. The inverse relationship between black and white populations is insanely strong with a correlation of -.90 (telling us that black and white people don’t really live together much). And we see a slight positive relationship between population density and white population percentage and a slight negative relationship between population density and black population percentage."
                    }), (0, o.jsx)("p", {
                        children: (0, o.jsx)("img", {
                            src: "https://www.dropbox.com/s/wxzelzv5floqo5n/corrplot.png?raw=1",
                            alt: "corrplot"
                        })
                    }), (0, o.jsx)("p", {
                        children: "So what does all of this mean? I think it means that if you’re a person looking for a diverse neighborhood, there may not be a ton of options. Racially, the city is very stratified. But what’s more, neighborhoods that are not majority white tend to have less income diversity as well. This may indicate a lack of difference in the type of jobs that people in an area work as well (although this is not supported by data…just a hypothesis). Also, how close you want to live with other people could influence in what part of the city you live."
                    }), (0, o.jsxs)("p", {
                        children: ["In my next post, I will bring in city data to get a better feel for what’s happening in the different block group areas. If you’d like to see more detail on this analysis, please check out my ", (0, o.jsx)("a", {
                            href: "https://github.com/ljshores/Exploring_Chicago",
                            children: "github repo"
                        }), ". There’s a lot of data cleaning that took place for this analysis."]
                    }), (0, o.jsxs)("p", {
                        children: ["Sources: ", (0, o.jsx)("br", {}), (0, o.jsx)("a", {
                            href: "https://data.cityofchicago.org/Facilities-Geographic-Boundaries/Boundaries-Community-Areas-current-/cauq-8yn6",
                            children: "https://data.cityofchicago.org/Facilities-Geographic-Boundaries/Boundaries-Community-Areas-current-/cauq-8yn6"
                        }), (0, o.jsx)("br", {}), (0, o.jsx)("a", {
                            href: "https://www.census.gov/cgi-bin/geo/shapefiles/index.php",
                            children: "https://www.census.gov/cgi-bin/geo/shapefiles/index.php"
                        }), (0, o.jsx)("br", {}), "2017 American Community Survey Data: ", (0, o.jsx)("a", {
                            href: "https://www.nhgis.org",
                            children: "https://www.nhgis.org"
                        })]
                    }), (0, o.jsx)("div", {
                        className: "share"
                    })]
                })
            }, {
                id: 6,
                img: "./img/news/black_twitter_mug.jpg",
                title: "Exploring BlackTwitter",
                date: "May 12, 2020",
                meta: "Data, NLP",
                descriptionText1: (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)("p", {
                        children: "Have you heard of BlackTwitter? If you know me, you know that I’m a bit slow when it comes to social media. But I am a black woman and try to stay down with the culture. So my understanding of BlackTwitter has been that it’s when black folks bring our collective voice to the platform to discuss something. But I wasn’t sure if this collective voice had some structure, i.e. if it lived under a black twitter hashtag. So I set out to answer that question… Can analyzing tweets with variations of the hashtag “blacktwitter” give us a view into a black collective voice? And if so, what is it saying?"
                    }), (0, o.jsx)("p", {
                        children: "To go about answering these questions, I used Twitter’s Search api to pull tweets with variations of the hashtag #BlackTwitter. The api will only allow you to pull data from the last seven days, and it will not pull an exhaustive list of all tweets. I created a loop and used tweepy to pull a certain amount of tweets, pause, and continue to pull more tweets. Here’s a sample of the data."
                    }), (0, o.jsx)("p", {
                        children: (0, o.jsx)("img", {
                            src: "https://www.dropbox.com/s/1t2m92ympk9dqst/df_sample.png?raw=1",
                            alt: "dfsample"
                        })
                    }), (0, o.jsx)("p", {
                        children: "This exercise yielded ~37K tweets, but when I removed duplicate text I was left with just 620 tweets. This was a bit alarming to me, because I wasn’t sure why I was yielding so many duplicates. Was something wrong with my pull methodology? Was I pulling a bunch of retweets? While a check of unique twitter id’s showed that there were duplicated tweet text that had unique id’s, this nowhere near accounted for most of the duplicates. For the sake of answering the posed question, I decided to move forward with the analysis on the de-duped data rather than do more digging into why there were so few unique tweets."
                    }), (0, o.jsx)("p", {
                        children: (0, o.jsx)("strong", {
                            children: "Exploring the Data"
                        })
                    }), (0, o.jsx)("p", {
                        children: "The tweets were collected from April 25 through May 9. The majority of the tweets come from various parts of the US, but there were a noticeable amount of tweets from Pakistan and India. This was interesting to me, so I spot checked tweets coming from these places and found that the hashtag seemed to be used a lot in reference to clothing/fashion that was the color black. This led me to question – Twitter is a global platform; how do we reconcile hashtags that may be geared towards a certain movement in a certain place, and the fact that other places may not be aware of that movement."
                    }), (0, o.jsx)("p", {
                        children: (0, o.jsx)("img", {
                            src: "https://www.dropbox.com/s/pajg9h8l4826006/location_barplot.png?raw=1",
                            alt: "location"
                        })
                    }), (0, o.jsx)("p", {
                        children: "I created a word cloud to get a quick view of most frequent words."
                    }), (0, o.jsx)("p", {
                        children: (0, o.jsx)("img", {
                            src: "https://www.dropbox.com/s/c26y77juvrk8hy2/word_cloud.png?raw=1",
                            alt: "wordcloud"
                        })
                    }), (0, o.jsx)("p", {
                        children: "I also took a look at what were the most frequent hashtags in this corpus of tweets. Of course, we expect “blacktwitter” to be there a lot, so I removed it. At the time that I was pulling tweets, information and video about the lynching of Ahmaud Arbery, a black runner in Georgia, had surfaced. So I expected to see a lot of commentary on that subject. Looking at the top 30 most frequent hashtags I saw that the Arbery topic manifested itself in several different hashtags. Black excellence, racism, and COVID19 were other top tags. On the other end of the spectrum, hashtags such as BlueTwitter and RedTwitter occurred, which indicate posts that may be those that were geared towards fashion in other countries. It was also interesting that there were many hashtags of different countries, which indicates either the globalized use of this hashtag or the global relevance."
                    }), (0, o.jsx)("p", {
                        children: (0, o.jsx)("img", {
                            src: "https://www.dropbox.com/s/w1ee14beku8n4lc/hashtag_wordcloud.png?raw=1",
                            alt: "hashtagwordcloud"
                        })
                    }), (0, o.jsx)("p", {
                        children: (0, o.jsx)("strong", {
                            children: "Grouping Tweets"
                        })
                    }), (0, o.jsx)("p", {
                        children: "The last thing I wanted to do was get a better grasp of the main topics within the text. In a situation like this, I would have liked to use a method like Latent Dirichlet Allocation for topic modeling. But knowing that we had so few tweets, it just didn’t seem appropriate. Therefore, I decided to do a hierarchical clustering and check the groups to see if any obvious themes emerged. I converted the cleaned twitter text to word embeddings using Word2Vec. The spatially visualized embeddings seemed very clumped together. I believe this is again perhaps the result of too few observations, and a very small amount of words in each observation, which would cause all the words to seem close."
                    }), (0, o.jsx)("p", {
                        children: (0, o.jsx)("img", {
                            src: "https://www.dropbox.com/s/bqzn1ut2w6o2p9n/embeddings_pic.png?raw=1",
                            alt: "Embeddings"
                        })
                    }), (0, o.jsx)("p", {
                        children: "I proceeded to cluster the embedded sentences using hierarchical clustering. To evaluate I looked at how many observations fell into each of the four clusters, and to try to make sense of the clusters I looked at most frequent words and highest tf-idf weights per cluster. Neither of these methods yielded much insight into a unique topic or group composition."
                    }), (0, o.jsxs)("p", {
                        children: ["If you’d like more details about the analysis and the code, please check out my ", (0, o.jsx)("a", {
                            href: "https://github.com/ljshores/Explore_BlackTwitter",
                            children: "github repo"
                        }), "."]
                    }), (0, o.jsx)("p", {
                        children: (0, o.jsx)("strong", {
                            children: "Final Thoughts"
                        })
                    }), (0, o.jsx)("p", {
                        children: "From the limited amount of data we had to work with, I get the sense that the blacktwitter hashtag is not a great representation of a collective of black voices on Twitter. I get the sense that although major topics here included black excellence, racism, and current issues facing black people, a broader idea of what black twitter really is cannot be captured under one hashtag. This is evidenced by the array of other hashtags that were used in conjunction with #BlackTwitter. Also, using this hashtag as a representation can be difficult because there are trolls using it in very negative ways, and there are people using the hashtag that may not have the social context of Black people, particularly in the US."
                    }), (0, o.jsx)("p", {
                        children: "Of course, we have to remember that this is a very small sample of the usage of the hashtag. In the future, finding a way to pull more tweets over a large amount of time would give us a broader view of how the tag is used, and how usage coincides with certain major events. With more data, we could do a more useful exploration of topic modeling. For now, my sense is that if you really want to understand black twitter, you just have to keep your eyes and ears open; it may manifest itself under a neat hashtag and on the other hand it may not."
                    }), (0, o.jsx)("div", {
                        className: "share"
                    })]
                })
            }, {
                id: 7,
                img: "./img/news/chi_deep_dish_pizza.jpg",
                title: "Who Has the Best Pizza in Chicago",
                date: "May 12, 2020",
                meta: "Analytics, Data Visualization",
                descriptionText1: (0, o.jsx)(o.Fragment, {
                    children: (0, o.jsxs)("article", {
                        children: [(0, o.jsx)("p", {
                            children: "As I mentioned before, I love Chicago. One of the reasons is that the city has AMAZING food, and I LOVE to eat! A heated topic among any Chicagoan is who serves up the best pizza. So one summer I decided that I would try to use data to figure this out. This analysis is a two parter."
                        }), (0, o.jsxs)("p", {
                            children: [(0, o.jsx)("strong", {
                                children: "Part I: My Summer of Pizza"
                            }), (0, o.jsx)("br", {}), "In the first part, my bf at the time and I visited twenty pizzerias and assigned them a score out of 10 for each of four categories: toppings, crust, sauce, and an overall score. Being that there were two of us that makes for 20 possible points for each category and a total possible score of 80 points for a pizza."]
                        }), (0, o.jsxs)("p", {
                            children: ["I made a visualization of all our results in ", (0, o.jsx)("a", {
                                href: "https://public.tableau.com/profile/lauren.shores#!/vizhome/ChicagoPizzaTour/Dashboard1",
                                children: "tableau"
                            }), " which you can take a look at. Spoiler alert: Pequod’s had the best deep dish pizza and Home Run Inn had our favorite thin pizza."]
                        }), (0, o.jsxs)("p", {
                            children: [(0, o.jsx)("strong", {
                                children: "Part II:"
                            }), (0, o.jsx)("br", {}), "In part II, I scraped data from yelp for the restaurants in question and did some digging to try to figure out what other people liked and why. You can see the full analysis code on my ", (0, o.jsx)("a", {
                                href: "https://github.com/ljshores/Chicago-Summer-of-Pizza",
                                children: "github"
                            }), "."]
                        }), (0, o.jsx)("p", {
                            children: "I scraped reviews from Yelp and used Beautiful Soup in python to parse the data, getting fields for rating, post date, and review description. I ran some quick summary statistics to get a sense of what was going on with the reviews. We see the top restaurants in terms of average rating and we also see that some of these pizzerias have a ton of reviews, while others have very few."
                        }), (0, o.jsx)("p", {
                            children: (0, o.jsx)("img", {
                                src: "https://www.dropbox.com/s/h6xv12kag0wyl5x/summary_stas.png?raw=1",
                                alt: "summary stats"
                            })
                        }), (0, o.jsx)("p", {
                            children: "Restaurants aren’t static entities, so I wanted to take a look at the average ratings over time. We see that restaurants like Benny’s and Paisan’s had sharp declines in some years, while places like Freddy’s stayed pretty consistent."
                        }), (0, o.jsx)("p", {
                            children: (0, o.jsx)("img", {
                                src: "https://www.dropbox.com/s/kj1ydjxkv7yv1le/ratings_time.png?raw=1",
                                alt: "ratings time"
                            })
                        }), (0, o.jsx)("p", {
                            children: "Looking at the number of reviews over time revealed places like Bennys and Paisan’s had very few reviews during their rough years, which means that a single low score could have a bigger impact on the overall score for that year. Pequod’s and Piece had more reviewers in leaps and bounds over the years, which is why they skyrocketed off the chart. In general most restaurants saw an increase in reviewers, which may be more a reflection on changing behavior in society (the tendency to go online and leave reviews) rather than any specific thing about the restaurant. But also, the number of reviewers could be a reflection of “buzz”. The more people say something is good, the more people want to go try it."
                        }), (0, o.jsx)("p", {
                            children: (0, o.jsx)("img", {
                                src: "https://www.dropbox.com/s/sb49kxczhb3a64j/review_cnt_time.png?raw=1",
                                alt: "reviews time"
                            })
                        }), (0, o.jsx)("p", {
                            children: "Below I plot the relationship between number of reviews and ratings."
                        }), (0, o.jsx)("p", {
                            children: (0, o.jsx)("img", {
                                src: "https://www.dropbox.com/s/gfbg73x2fco6pj9/cnt%20vs%20ratings.png?raw=1",
                                alt: "cnt v rate"
                            })
                        }), (0, o.jsx)("p", {
                            children: "In general there seems to be a positive relationship, but outliers Piece and Pequod’s show that having the most reviews doesn’t mean most highly rated, and Dante’s and Benny’s shows that low number of reviews doesn’t mean low ratings."
                        }), (0, o.jsx)("p", {
                            children: "The last portion of the analysis I want to talk about is digging into the text descriptions. I looked at ngrams of the text to see what sequence of words occurred most frequently for some restaurants. Trigrams were interesting because I was able to discern specific characteristics about the pizza like Spacca Napoli is good for Neopolitan pizza, and Dante’s is a New York style pizza. People like Pequod’s and Lou Malnati’s for their deep dish, while Benny’s seems to be a place people like to order in for. I also was able to see that Freddy’s which had the highest average rating had many mentions about things that weren’t related to pizza, like “Italian ice” and “Italian food”, which make me question if their high rating was even driven by pizza."
                        }), (0, o.jsxs)("p", {
                            children: ["In short, the yelp reviews did not really line up with my ", (0, o.jsx)("a", {
                                href: "https://public.tableau.com/profile/lauren.shores#!/vizhome/ChicagoPizzaTour/Dashboard1",
                                children: "“Summer of Pizza”"
                            }), " favorites. The pizzas that we liked best didn’t register the top ratings on Yelp. And the Yelp reviews showed that popularity doesn’t necessarily equate to high opinions. I know everyone has strong opinions about what they think is the best. But I believe it really depends on what you grew up liking and what characteristics are most important to you in a pizza. I personally think a great crust and the right amount of sauce is key. So maybe we just have to agree to disagree (for all you Lou Malnati’s fans, I really disliked that pizza)."]
                        }), (0, o.jsx)("p", {
                            children: "If you’re interested, here are the pizzas we tried ranked from our favorite to least favorite next to Yelp’s rank of top average rating and bottom average rating. Note, that I seemed to have missed three restaurants in the Yelp analysis. My apologies."
                        }), (0, o.jsx)("p", {
                            children: (0, o.jsx)("img", {
                                src: "https://www.dropbox.com/s/ix21p27ahwlxzcw/my_ranking_v_yelp.png?raw=1",
                                alt: "myRank v Yelp"
                            })
                        }), (0, o.jsx)("div", {
                            className: "share"
                        })]
                    })
                })
            }, {
                id: 8,
                img: "./img/news/finish_line.jpg",
                title: "Fumbling Your Way to the Finish Line",
                date: "May 1, 2020",
                meta: "Grit",
                descriptionText1: (0, o.jsx)(o.Fragment, {
                    children: (0, o.jsxs)("article", {
                        children: [(0, o.jsx)("p", {
                            children: "Hello there. Welcome to my first ever blog post! I wanted to use my blog to inform, share, and explore different ideas, and I thought the first thing I’d talk about is a quick tutorial on how I got this site up and running."
                        }), (0, o.jsx)("p", {
                            children: "But that’s not what this post will be…"
                        }), (0, o.jsx)("p", {
                            children: "I can’t give you a quick tutorial on how I got this site up and running because I fumbled my way through it."
                        }), (0, o.jsx)("p", {
                            children: "Github promises that with Github Pages and Jekyll you can easily convert your repository to a website. And it is pretty easy in theory. But anyone that has ever tried to install software or code anything knows that you inevitably face some snags."
                        }), (0, o.jsx)("p", {
                            children: "I wanted something nice; a little better than basic, but simple, because I don’t know html, am only passingly familiar with markdown through my experiences using RMarkdown, and honestly I don’t really know the science behind building a website."
                        }), (0, o.jsxs)("p", {
                            children: ["Anyway, I went on ", (0, o.jsx)("a", {
                                href: "https://pages.github.com/",
                                children: "Github Pages"
                            }), ", and created my .io repository. Then I went to the ", (0, o.jsx)("a", {
                                href: "https://jekyllrb.com/docs/",
                                children: "Jekyll site"
                            }), " and looked at how to quickstart my site, first checking my requirements. Of course, when I checked I had the wrong version of Ruby. And thus that started my spiral of fumbles."]
                        }), (0, o.jsx)("p", {
                            children: "I won’t go into details about this. There were visits to the Ruby site and lots of googling of issues. There was a lot of installing and uninstalling. There was some fumbling around with Homebrew versions. There was just a lot."
                        }), (0, o.jsx)("p", {
                            children: "My point is, I had a goal to create a site where I can post my ideas. I had hoped that I’d come out with a slick process to tell you all how to do that as well. But my path wasn’t linear. I encountered a lot of issues and uncertainty. I had to know how to go out and find answers to my issues and have the persistence to work through them."
                        }), (0, o.jsx)("p", {
                            children: "You’re here, reading this on my site, so I achieved my goal. I fumbled my way to get here, but I learned some things along the way. So my message is, when you feel like you want to get down on yourself because you think you should know something that you think everyone else knows, when you feel imposter syndrome creeping in, when you feel like maybe you’re out of your depth, just remember that it’s ok to jump in and fumble along until you reach your goal. What really matters is that you got to where you wanted to go and you learned some things along the way."
                        }), (0, o.jsx)("div", {
                            className: "share"
                        })]
                    })
                })
            }]
        },
        9255: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let o = a(5893);
            e.exports = [{
                id: 1,
                tooltipId: "Analytics, Statistical Inference",
                portfolioImage: "./img/portfolio/old_books&Notebook.jpg",
                portfolioLink: "https://github.com/ljshores/Chicago_Public_Schools_Attainment",
                title: "Understanding Academic Attainment in Chicago Public Schools",
                meta: "Analytics, Statistical Inference",
                category: "Analytics, Statistical Inference",
                date: "CPS Progress Report 2017-2018",
                projectDescriptions: (0, o.jsx)(o.Fragment, {
                    children: (0, o.jsx)("p", {
                        children: "What drives student success? This project dives into Chicago Public Schools data to uncover the ingredients of academic attainment and the barriers holding schools back. Using metrics like reading scores, truancy rates, and neighborhood demographics, I explored patterns and built regression models to identify key factors of school performance. The analysis reveals actionable insights into how mobility, socioeconomic factors, and school culture shape outcomes, while also debunking some common assumptions. From targeted interventions to equity-focused policy recommendations, this project offers a fresh perspective on improving educational outcomes in urban schools."
                    })
                })
            }, {
                id: 2,
                tooltipId: "Amazing Race",
                portfolioImage: "./img/portfolio/global-residence-index-Zkk4rEKnWXE-unsplash.jpg",
                portfolioLink: "https://github.com/ljshores/amazing_race_analysis",
                appLink: "https://amazing-race-pred-app.onrender.com/",
                title: "Predicting Amazing Race Outcomes",
                meta: "Predictive Modeling, Machine Learning",
                category: "Predictive Modeling, Machine Learning, NLP, App Creation",
                date: "Scraped Wikipedia and Fandom sites",
                projectDescriptions: (0, o.jsx)(o.Fragment, {
                    children: (0, o.jsx)("p", {
                        children: "This project explores the dynamics of success in The Amazing Race by developing a machine learning model to predict whether a team will finish in the top three. Using scraped data on team demographics, relationships, and performance, various tree-based models were trained and evaluated. Challenges included a small, imbalanced dataset and messy text data. The final model captured ~73% of true top-performing teams but over-predicted winners, achieving 33% precision. Future improvements include leveraging richer text data about contestants to refine predictions and uncover deeper insights into traits influencing success. The model was deployed as an interactive Dash app for public use."
                    })
                })
            }, {
                id: 3,
                tooltipId: "Chi Geospatial",
                portfolioImage: "./img/portfolio/chi_reverse_skyline.jpg",
                portfolioLink: "https://github.com/ljshores/chicago-insights-geospatial/tree/main",
                title: "Chicago Geospatial Analysis",
                meta: "Geospatial Analysis, App Deployment",
                category: "Geospatial Analysis, App Deployment",
                date: "https://data.cityofchicago.org",
                projectDescriptions: (0, o.jsx)(o.Fragment, {
                    children: (0, o.jsx)("p", {
                        children: "This analytical project leverages geospatial data to explore how demographics, businesses, crime, transportation, and rent patterns interact across Chicago. A dashboard was developed using Dash and Render to allow users to explore these relationships and assess neighborhoods. The analysis highlights stark spatial trends, such as strong correlations between race, income, and rent prices, with wealth and businesses concentrated in the city’s northern and downtown areas, while lower-income and majority-Black areas are more prevalent on the south and west sides. This project underscores Chicago’s reputation as a highly segregated city and provides a tool for deeper, user-driven exploration."
                    })
                })
            }, {
                id: 4,
                tooltipId: "Coming Soon",
                portfolioImage: "/img/portfolio/4.jpg",
                portfolioLink: "https://www.instagram.com/",
                title: "Coming Soon",
                meta: "new project",
                category: "TBD",
                date: "",
                projectDescriptions: (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)("p", {
                        children: "We live in a world where we need to move quickly and iterate on our ideas as flexibly as possible. Building mockups strikes the ideal balance between true-life representation of the end product and ease of modification."
                    }), (0, o.jsx)("p", {
                        children: "Mockups are useful both for the creative phase of the project - for instance when you‘re trying to figure out your user flows or the proper visual hierarchy - and the production phase when they will represent the target product. Making mockups a part of your creative and development process allows you to quickly and easily ideate."
                    })]
                })
            } ]
        },
        8803: function(e) {
            "use strict";
            e.exports = [{
                icon: "home",
                itemName: "Home",
                itemRoute: "#home",
                activeClass: "active"
            }, {
                icon: "human",
                itemName: "About",
                itemRoute: "#about",
                activeClass: ""
            }, {
                icon: "portfolio",
                itemName: "Portfolio",
                itemRoute: "#portfolio",
                activeClass: ""
            }, {
                icon: "blog",
                itemName: "Blog",
                itemRoute: "#blog",
                activeClass: ""
            }]
        },
        7292: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return E
                }
            });
            var o = a(5893),
                i = a(5152),
                s = a.n(i),
                n = a(2348),
                r = a(7294),
                h = a(1664),
                l = a.n(h),
                c = a(7355),
                d = a.n(c),
                u = a(8803),
                p = a.n(u),
                m = a(5675),
                g = a.n(m),
                y = () => {
                    let [e, t] = (0, r.useState)(!1), a = () => t(!e);
                    return (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("div", {
                            className: "mob-header",
                            children: (0, o.jsx)("button", {
                                className: "toggler-menu",
                                onClick: a,
                                children: (0, o.jsxs)("div", {
                                    className: e ? "active" : "",
                                    children: [(0, o.jsx)("span", {}), (0, o.jsx)("span", {}), (0, o.jsx)("span", {})]
                                })
                            })
                        }), (0, o.jsx)("div", {
                            className: e ? "edina_tm_sidebar menu-open" : "edina_tm_sidebar",
                            children: (0, o.jsx)("div", {
                                className: "sidebar_inner",
                                children: (0, o.jsx)("div", {
                                    className: "menu",
                                    children: (0, o.jsx)(d(), {
                                        scrollTargetIds: ["home", "about", "portfolio", "blog"],
                                        activeNavClass: "active",
                                        offset: 0,
                                        scrollDuration: "100",
                                        children: (0, o.jsx)("ul", {
                                            className: "anchor_nav",
                                            children: p().map((e, t) => (0, o.jsx)("li", {
                                                children: (0, o.jsx)("div", {
                                                    className: "list_inner",
                                                    children: (0, o.jsxs)("a", {
                                                        href: e.itemRoute,
                                                        className: e.activeClass,
                                                        onClick: a,
                                                        children: [(0, o.jsx)(g(), {
                                                            width: 18,
                                                            height: 18,
                                                            className: "svg custom",
                                                            src: "img/svg/".concat(e.icon, ".svg"),
                                                            alt: "icon"
                                                        }), e.itemName]
                                                    })
                                                })
                                            }, t))
                                        })
                                    })
                                })
                            })
                        })]
                    })
                },
                w = a(4052);
            let f = [{
                iconName: (0, o.jsx)(w.uOf, {}),
                link: "https://github.com/ljshores"
            }, {
                iconName: (0, o.jsx)(w.qOw, {}),
                link: "https://www.linkedin.com/in/lauren-j-shores"
            }];
            var b = () => (0, o.jsx)("ul", {
                children: f.map((e, t) => (0, o.jsx)("li", {
                    children: (0, o.jsx)("a", {
                        href: e.link,
                        target: "_blank",
                        rel: "noreferrer",
                        children: e.iconName
                    })
                }, t))
            });
            a(8244);
            let x = {
                src: "/_next/static/media/me_smile_cover.9cee66ad.jpeg",
                height: 302,
                width: 302,
                blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oADAMBAAIQAxAAAAGQFf/EABYQAQEBAAAAAAAAAAAAAAAAAAIAE//aAAgBAQABBQLZK//EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAEDAQE/Aa//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAgEBPwGP/8QAGRAAAgMBAAAAAAAAAAAAAAAAAQIAETFR/9oACAEBAAY/AmcsbTR2f//EABcQAQEBAQAAAAAAAAAAAAAAAAERALH/2gAIAQEAAT8hJpIHVN//2gAMAwEAAgADAAAAEAv/xAAWEQEBAQAAAAAAAAAAAAAAAAABACH/2gAIAQMBAT8QYBl//8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERIf/aAAgBAgEBPxBbdP/EABkQAQEBAAMAAAAAAAAAAAAAAAERIQBBUf/aAAgBAQABPxARagWlQv1vWQ5//9k=",
                blurWidth: 8,
                blurHeight: 8
            };
            var j = () => (0, o.jsx)("div", {
                    className: "edina_tm_hero",
                    id: "home",
                    children: (0, o.jsxs)("div", {
                        className: "content",
                        children: [(0, o.jsx)("div", {
                            className: "img-shape",
                            "data-aos": "fade-up",
                            "data-aos-duration": "1200",
                            children: (0, o.jsx)(g(), {
                                src: x,
                                alt: "brand"
                            })
                        }), (0, o.jsxs)("div", {
                            className: "extra",
                            children: [(0, o.jsx)("h3", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "1200",
                                "data-aos-delay": "100",
                                className: "hello",
                                children: "Lauren Shores"
                            }), (0, o.jsx)("h1", {
                                className: "name",
                                "data-aos": "fade-up",
                                "data-aos-duration": "1200",
                                "data-aos-delay": "200",
                                children: (0, o.jsx)("span", {
                                    className: "typer-toper",
                                    children: (0, o.jsx)("h2", {
                                        className: "name",
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "1200",
                                        "data-aos-delay": "200",
                                        children: (0, o.jsx)("span", {
                                            className: "typer-toper",
                                            children: "Data Scientist | Learning Enthusiast | Speaker"
                                        })
                                    })
                                })
                            }), (0, o.jsx)("p", {
                                className: "text",
                                "data-aos": "fade-up",
                                "data-aos-duration": "1200",
                                "data-aos-delay": "300",
                                children: "Harnessing data to uncover insights and provide solutions for over 8 years."
                            }), (0, o.jsx)("div", {
                                className: "social",
                                "data-aos": "fade-up",
                                "data-aos-duration": "1200",
                                "data-aos-delay": "400",
                                children: (0, o.jsx)(b, {})
                            })]
                        })]
                    })
                }),
                v = () => {
                    let [e, t] = (0, r.useState)(!1);
                    return (0, o.jsx)("div", {
                        className: "edina_tm_about",
                        id: "about",
                        children: (0, o.jsxs)("div", {
                            className: "container",
                            children: [(0, o.jsx)("div", {
                                className: "about_title",
                                children: (0, o.jsx)("h3", {
                                    children: "About Me"
                                })
                            }), (0, o.jsxs)("div", {
                                className: "content",
                                children: [(0, o.jsx)("div", {
                                    className: "leftpart",
                                    "data-aos": "fade-right",
                                    "data-aos-duration": "1200",
                                    "data-aos-delay": "100",
                                    children: (0, o.jsxs)("div", {
                                        className: "info",
                                        children: [(0, o.jsxs)("h3", {
                                            children: ["Hi, I'm ", (0, o.jsx)("span", {
                                                children: "Lauren Shores"
                                            })]
                                        }), (0, o.jsx)("p", {
                                            children: "I’m a data scientist who loves digging into data to solve problems and uncover insights to better understand the world and make decisions. With professional experience in both supply chain and real estate, I’ve led multi-million-dollar projects at a Fortune 500 company, creating machine learning models and forecasting solutions that make a real impact."
                                        }), (0, o.jsx)("br", {}), (0, o.jsx)("p", {
                                            children: "I earned my MS in Predictive Analytics from Northwestern University, and I’m also passionate about mentoring and helping Black professionals in data through my work at BlackTIDES Data. Clear communication is one of my superpowers—it’s how I keep projects moving and everyone on the same page."
                                        }), (0, o.jsx)("br", {}), (0, o.jsx)("p", {
                                            children: "Outside of work, you’ll find me diving into personal data projects on topics like race, place, and food. When I’m not geeking out on data, I’m probably exploring new cuisines, reading, watching movies, traveling, or trying something new."
                                        })]
                                    })
                                }), (0, o.jsx)("div", {
                                    className: "rightpart",
                                    children: (0, o.jsxs)("div", {
                                        className: "image",
                                        children: [(0, o.jsx)(g(), {
                                            width: 445,
                                            height: 599,
                                            src: "/img/thumbs/26-35.jpg",
                                            alt: "thumb"
                                        }), (0, o.jsx)("div", {
                                            className: "main",
                                            style: {
                                                backgroundImage: "url(./img/about/3.jpeg)"
                                            },
                                            "data-aos": "fade-left",
                                            "data-aos-duration": "1200",
                                            "data-aos-delay": "200"
                                        }), (0, o.jsx)("div", {
                                            className: "experience",
                                            "data-aos": "fade-up",
                                            "data-aos-duration": "1200",
                                            "data-aos-delay": "300",
                                            children: (0, o.jsxs)("div", {
                                                className: "info",
                                                children: [(0, o.jsx)("h3", {
                                                    children: "8+ Years"
                                                }), (0, o.jsx)("span", {
                                                    children: "Of Experience"
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            })]
                        })
                    })
                },
                k = a(3253),
                A = a.n(k),
                I = a(8735),
                N = a(6066),
                T = a(9255),
                C = a.n(T);
            A().setAppElement("#__next");
            var _ = () => {
                    let [e, t] = (0, r.useState)({}), [a, i] = (0, r.useState)(!1), s = e => {
                        t(C().find(t => (null == t ? void 0 : t.id) === e)), i(!0)
                    }, n = e => {
                        s(e)
                    };
                    return (0, o.jsxs)("div", {
                        className: "portfolio_inner my_carousel gallery_zoom",
                        children: [(0, o.jsx)("ul", {
                            "data-aos": "fade-right",
                            "data-aos-duration": "1200",
                            children: (0, o.jsx)(N.Z, {
                                dots: !1,
                                arrow: !0,
                                infinite: !0,
                                speed: 800,
                                slidesToShow: 3,
                                slidesToScroll: 1,
                                autoplay: !1,
                                draggable: !1,
                                responsive: [{
                                    breakpoint: 575,
                                    settings: {
                                        slidesToShow: 1,
                                        arrow: !1,
                                        autoplay: !1,
                                        draggable: !0,
                                        speed: 300,
                                        dots: !0
                                    }
                                }],
                                children: C().map(e => (0, o.jsx)("li", {
                                    children: (0, o.jsx)("div", {
                                        className: "list_inner",
                                        children: (0, o.jsx)("div", {
                                            className: "image",
                                            children: (0, o.jsxs)("div", {
                                                onClick: () => n(null == e ? void 0 : e.id),
                                                className: "details",
                                                children: [(0, o.jsx)(g(), {
                                                    width: 357,
                                                    height: 357,
                                                    src: e.portfolioImage,
                                                    "data-tip": !0,
                                                    "data-for": e.tooltipId,
                                                    alt: "portfolio"
                                                }), (0, o.jsx)(I.Z, {
                                                    id: e.tooltipId,
                                                    place: "bottom",
                                                    type: "light",
                                                    effect: "float",
                                                    className: "tooltip-wrapper",
                                                    children: (0, o.jsxs)("div", {
                                                        children: [(0, o.jsx)("h5", {
                                                            children: e.title
                                                        }), (0, o.jsx)("span", {
                                                            children: e.meta
                                                        })]
                                                    })
                                                })]
                                            })
                                        })
                                    })
                                }, e.id))
                            })
                        }), (0, o.jsx)(A(), {
                            isOpen: a,
                            onRequestClose: () => i(!1),
                            contentLabel: "My dialog",
                            className: "custom-modal",
                            overlayClassName: "custom-overlay",
                            closeTimeoutMS: 500,
                            children: (0, o.jsxs)("div", {
                                className: "edina_tm_modalbox",
                                children: [(0, o.jsx)("button", {
                                    className: "close-modal",
                                    onClick: () => i(!1),
                                    children: (0, o.jsx)(g(), {
                                        width: 45,
                                        height: 45,
                                        src: "/img/svg/cancel.svg",
                                        alt: "close icon"
                                    })
                                }), (0, o.jsx)("div", {
                                    className: "box_inner",
                                    children: (0, o.jsxs)("div", {
                                        className: "description_wrap scrollable",
                                        children: [(0, o.jsx)("div", {
                                            className: "image",
                                            children: (0, o.jsx)("div", {
                                                className: "main",
                                                style: {
                                                    backgroundImage: "url(".concat(null == e ? void 0 : e.portfolioImage, ")")
                                                }
                                            })
                                        }), (0, o.jsxs)("div", {
                                            className: "portfoiol_content-inner",
                                            children: [(0, o.jsxs)("div", {
                                                className: "left-content",
                                                children: [(0, o.jsxs)("h2", {
                                                    className: "title",
                                                    children: [" ", null == e ? void 0 : e.title]
                                                }), null == e ? void 0 : e.projectDescriptions]
                                            }), (0, o.jsx)("div", {
                                                className: "right-content",
                                                children: (0, o.jsxs)("ul", {
                                                    className: "list",
                                                    children: [(0, o.jsx)("li", {
                                                        children: (0, o.jsx)("span", {
                                                            children: null == e ? void 0 : e.clientName
                                                        })
                                                    }), (0, o.jsxs)("li", {
                                                        children: [(0, o.jsx)("h5", {
                                                            children: "Category"
                                                        }), (0, o.jsx)("span", {
                                                            children: null == e ? void 0 : e.category
                                                        })]
                                                    }), (0, o.jsxs)("li", {
                                                        children: [(0, o.jsx)("h5", {
                                                            children: "Data"
                                                        }), (0, o.jsx)("span", {
                                                            children: null == e ? void 0 : e.date
                                                        })]
                                                    }), (0, o.jsxs)("li", {
                                                        children: [(0, o.jsx)("h5", {
                                                            children: "Link"
                                                        }), (0, o.jsx)("span", {
                                                            children: (0, o.jsx)("a", {
                                                                href: null == e ? void 0 : e.portfolioLink,
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                children: null == e ? void 0 : e.portfolioLink
                                                            })
                                                        })]
                                                    }), (0, o.jsxs)("li", {
                                                        className: "news_share d-blok",
                                                        children: [(0, o.jsx)("h5", {
                                                            children: "Share"
                                                        }), (0, o.jsx)(b, {})]
                                                    })]
                                                })
                                            })]
                                        })]
                                    })
                                })]
                            })
                        })]
                    })
                },
                S = a(6118),
                B = a.n(S),
                z = a(3454);
            A().setAppElement("#__next");
            var q = () => {
                    let [e, t] = (0, r.useState)({}), [a, i] = (0, r.useState)(!1), s = e => {
                        t(B().find(t => (null == t ? void 0 : t.id) === e)), i(!0)
                    }, n = e => {
                        s(e)
                    };
                    return (0, o.jsx)(o.Fragment, {
                        children: (0, o.jsxs)("div", {
                            className: "news_inner my_carousel",
                            id: "modal",
                            children: [(0, o.jsx)("ul", {
                                children: (0, o.jsx)(N.Z, {
                                    dots: !1,
                                    arrow: !0,
                                    infinite: !0,
                                    speed: 800,
                                    slidesToShow: 3,
                                    slidesToScroll: 1,
                                    autoplay: !1,
                                    draggable: !1,
                                    responsive: [{
                                        breakpoint: 575,
                                        settings: {
                                            slidesToShow: 1,
                                            arrow: !1,
                                            autoplay: !1,
                                            speed: 300,
                                            draggable: !0,
                                            dots: !0
                                        }
                                    }],
                                    children: B().map(e => (0, o.jsx)("li", {
                                        "data-aos": "fade-right",
                                        "data-aos-duration": "1200",
                                        "data-aos-delay": "150",
                                        children: (0, o.jsxs)("div", {
                                            className: "list_inner",
                                            children: [(0, o.jsx)("div", {
                                                className: "image",
                                                onClick: () => n(null == e ? void 0 : e.id),
                                                children: (0, o.jsx)("div", {
                                                    className: "main",
                                                    style: {
                                                        backgroundImage: "url(".concat(e.img, ")")
                                                    }
                                                })
                                            }), (0, o.jsxs)("div", {
                                                className: "news_details",
                                                children: [(0, o.jsxs)("span", {
                                                    children: [e.date, " ", (0, o.jsx)("a", {
                                                        href: "#",
                                                        children: e.meta
                                                    })]
                                                }), (0, o.jsx)("h3", {
                                                    className: "title",
                                                    onClick: () => n(null == e ? void 0 : e.id),
                                                    children: e.title
                                                })]
                                            })]
                                        })
                                    }, e.id))
                                })
                            }), (0, o.jsx)(A(), {
                                isOpen: a,
                                onRequestClose: () => i(!1),
                                contentLabel: "My dialog",
                                className: "custom-modal",
                                overlayClassName: "custom-overlay",
                                closeTimeoutMS: 500,
                                children: (0, o.jsxs)("div", {
                                    className: "edina_tm_modalbox",
                                    children: [(0, o.jsx)("button", {
                                        className: "close-modal",
                                        onClick: () => i(!1),
                                        children: (0, o.jsx)(g(), {
                                            width: 45,
                                            height: 45,
                                            src: "".concat(z.env.assetPrefix || "", "/img/svg/cancel.svg"),
                                            alt: "close icon"
                                        })
                                    }), (0, o.jsx)("div", {
                                        className: "box_inner",
                                        children: (0, o.jsxs)("div", {
                                            className: "description_wrap scrollable",
                                            children: [(0, o.jsx)("div", {
                                                className: "image",
                                                children: (0, o.jsx)("div", {
                                                    className: "main",
                                                    style: {
                                                        backgroundImage: "url(".concat(null == e ? void 0 : e.img, ")")
                                                    }
                                                })
                                            }), (0, o.jsxs)("div", {
                                                className: "news_details",
                                                children: [(0, o.jsxs)("span", {
                                                    children: [null == e ? void 0 : e.date, " ", (0, o.jsx)("a", {
                                                        href: "#",
                                                        children: null == e ? void 0 : e.meta
                                                    })]
                                                }), (0, o.jsx)("h3", {
                                                    className: "title",
                                                    children: null == e ? void 0 : e.title
                                                })]
                                            }), (0, o.jsxs)("div", {
                                                className: "main_content",
                                                children: [(0, o.jsxs)("div", {
                                                    className: "descriptions",
                                                    children: [null == e ? void 0 : e.descriptionText1, (0, o.jsx)("div", {
                                                        className: "quotebox",
                                                        children: null == e ? void 0 : e.blockquote
                                                    }), null == e ? void 0 : e.descriptionText2]
                                                }), (0, o.jsxs)("div", {
                                                    className: "news_share ",
                                                    children: [(0, o.jsx)("span", {
                                                        children: "Share:"
                                                    }), (0, o.jsx)(b, {})]
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            })]
                        })
                    })
                },
                P = () => (0, o.jsx)(o.Fragment, {
                    children: (0, o.jsx)("div", {
                        className: "logo",
                        children: (0, o.jsx)(l(), {
                            href: "/"
                        })
                    })
                }),
                L = () => {
                    let [e, t] = (0, r.useState)(!0);
                    return (0, r.useEffect)(() => {
                        document.querySelector("body").classList.remove("rtl")
                    }, []), (0, o.jsxs)("div", {
                        className: "home-light edina_tm_mainpart ".concat(e ? "theme-dark" : ""),
                        children: [(0, o.jsx)("header", {
                            className: "header-area",
                            children: (0, o.jsx)("div", {
                                className: "header-inner",
                                children: (0, o.jsx)(P, {})
                            })
                        }), (0, o.jsx)(y, {}), (0, o.jsx)(j, {}), (0, o.jsx)(v, {}), (0, o.jsx)("div", {
                            className: "edina_tm_portfolio",
                            id: "portfolio",
                            children: (0, o.jsxs)("div", {
                                className: "container",
                                children: [(0, o.jsxs)("div", {
                                    className: "edina_tm_title",
                                    children: [(0, o.jsx)("h3", {
                                        children: "Portfolio"
                                    }), (0, o.jsx)("p", {
                                        children: "Data science and analytics projects of interest."
                                    })]
                                }), (0, o.jsx)(_, {})]
                            })
                        }), (0, o.jsx)("div", {
                            className: "edina_tm_news",
                            id: "blog",
                            children: (0, o.jsxs)("div", {
                                className: "container",
                                children: [(0, o.jsxs)("div", {
                                    className: "edina_tm_title",
                                    children: [(0, o.jsx)("h3", {
                                        children: "Blog"
                                    }), (0, o.jsx)("p", {
                                        children: "Delving into data-driven stories, data science techniques, ideas, and projects with real-world context."
                                    })]
                                }), (0, o.jsx)(q, {})]
                            })
                        })]
                    })
                };
            let M = () => (0, o.jsxs)(o.Fragment, {
                children: [(0, o.jsx)(n.Z, {
                    pageTitle: "Home Sidebar"
                }), (0, o.jsx)(L, {})]
            });
            var E = s()(() => Promise.resolve(M), {
                ssr: !1
            })
        }
    },
    function(e) {
        e.O(0, [152, 142, 222, 888, 774, 179], function() {
            return e(e.s = 5728)
        }), _N_E = e.O()
    }
]);
