class detailsOn {
    postr = () => {
        return {
            Name: "postr",
            Date: "01/15/2021",
            Meta: "A social media website like twitter to post your thoughts. You can like and comment on anyone's post",
            Desc: `I built a very basic social media website where users can sign up and post whatever is on their mind. This was my first time using the MERN stack. It was interesting to see how
                   backend and frontend beautifully merge together. I collected a users username and password to store it in MongoDB. This database also stored all the posts every posted, the 
                   number of likes and comments of each post, and who liked and commented on posts. I used GraphQL to query in data from the database and send data back to the database. Each user
                   was given a 1 hour token generated from JWTokens. And I used SemanticUI to make the website as visually pleasing as possible.`,
            Tags: ["MERN Stack", "GrapghQL", "SemanticUI"]
        }
    };

    cleverCart = () => {
        return {
            Name: "Clever Cart",
            Date: "01/11/2021",
            Meta: "An iOS shopping app that customers can use to buy products and admins can use to supply the products",
            Desc: `I built this iOS shopping app with a friend where customers can add/remove items from their carts. They can proceed to checkout which only empties the cart. Admins can add 
                   new items, increase the quantity of an existing item, or remove an item entirely. We created queries to an API that was connected to a MongoDB database. The database stored
                   information about the items, and kept track of users and admins. The API provided tokens that lasted for one hour, which determined if the user that signed in was a customer
                   or an admin. We show diffent screens to both type of users. Customers will have two tabs, one being a list of items in the store, and another being their cart. Admins will 
                   see a similar list of items in the store tab, where they're able to remove the item, and another tab to add a new product or increase the quantity of an existing item.`,
            Tags: ["Swift", "RestAPI"]
        }
    };

    insta = () => {
        return {
            Name: "Instagram Clone",
            Date: "12/28/2020",
            Meta: "A cross platform clone of Instagram. You can post/take pictures, write comments, and add friends ",
            Desc: `I built a replica of Instagram, just without the aesthetic styles. I was mainly focused on learning Redux in this project. Users can create accounts, post pictures from their
                   photo album, take pictures from the app, comment, like posts, and follow other users. All the data is stored in collections within my Firebase database. I haven't implemented 
                   the messaging, Instagram store, nor the Reels features. I used Redux to handle the data retrieved from Firebase and used Firebase to authenticate users.`,
            Tags: ["React Native", "Redux", "Firebase"]
        }
    };
    flappyBird = () => {
        return {
            Name: "AI Flappy Bird",
            Date: "06/09/2020",
            Meta: "An AI that learns and teaches itself the popular game Flappy Bird",
            Desc: `I simulated the once famous Flappy Bird game using Pygame. I used images from the internet to replicate the character and setting. The scoring system and method of playing was 
                   unchanged. However, I added and AI called NEAT-python that taught itself the game and attempted to obtain the highest score. I ran a loop where the game starts off with 20 Flappy
                   Birds and each of them try to get past the pipes. If all of the birds fail, the game goes to the next generation of Flappy birds that learned from the previous generation. I trained
                   a total of 48 generations and was able to get 3 birds reach a score of 250.`,
            Tags: ["Python", "Pygame", "NEAT-python"]
        }
    };
    googleAssistant = () => {
        return {
            Name: "Mini Google Assistant",
            Date: "04/08/20",
            Meta: "A voice assistant that would relay information about your inbox, events in your google calendar, youtube subscriptions, etc",
            Desc: `I developed a voice assistant using pyttsx3 library and Google API that lists unread emails from Gmail, creates events on Google Calendar, and check trending videos on Youtube. 
                   The voice assistant can recognize keywords and executes aspecific command associated with that keyword. For example you could say 'Hey Google, what are my 5 most recent emails?'
                   The voice assistant would read out the subject and sender of the email along with a brief introduction to the body.`,
            Tags: ["Python", "Google APIs", "Automation"]
        }
    };
    neuralNets = () => {
        return {
            Name: "Neural Networks",
            Date: "03/06/20",
            Meta: "A collection of machine learning projects",
            Desc: `I currated a bunch of small machine learning projects that I built to help me learn the field in this repository. One example of a mini project is the 'AI Reads Handwritten 
                   Digits' project. I analyzed and visualized the famous MNIST dataset, which contained images of digits 0-9 in many different penmanships, using pandas and matplotib. 
                   Then I utlilied TensorFlow and Keras libraries to train a model that was able to classify handwritten digits with an accuracy of 93%. Another example is the 'Titanic Survival' 
                   project. Like the MNIST dataset, I visualized and preprocessed the Titanic dataset, which contained data about the people onboard the Titanic. I was able to determine what feature
                   (sex, age, class, etc.) had a correlation with a higher chance of survival. I used different models such as Random Forest, Decision Trees, Logistic Regression, and others to
                   rank which model was able to predict the correlation the best.`,
            Tags: ["Machine Learning", "Python", "Data Science", "TensorFlow", "Pandas", "Keras", "Matplotlib"]
        }
    };
    atm = () => {
        return {
            Name: "ATM Machine",
            Date: "03/09/20",
            Meta: "A console application replicating ATM machine ",
            Desc: `I mimicked an ATM interface in the console using Java. A user can create accounts, withdraw/deposit money, and access their checking/savings account. Each user is given a 
                   unique ID and starts off with $0. I stored the user's name, address, bank account number in a SQL database which is connected to the frontend using JDBC`,
            Tags: ["Java", "MySQL", "JDBC"]
        }
    };

    otherProjects = () => {
        return {
            Name: "Practical Projects",
            Meta: "A list of other projects I've worked on",
            Projects: [
                {
                    Name: "Covid-19 Voice Assistant",
                    Date: "03/19/2020",
                    Meta: `A voice assistant that would give the user information about Covid-19. A user can ask questions like 'How many deaths in England?' and the  voice assistant would respond
                           with accurate data. I fetched data from 'https://www.worldometers.info/coronavirus/', which had inforation about the virus around the world. I also attempted to 
                           preprocess the data with Pandas and visualize the data with Matplotlib. `,
                    Tags: ["Python", "Automation", "RestAPI", "Pandas", "Matplotlib"]
                },
                {
                    Name: "Auto-Fill Attendance",
                    Date: "03/24/2020",
                    Meta: `When lockdown began, we had to attend school online. My school gave us a Google Form to fill out every day in place of attendance. I found it a bit annoying to fill in
                           my name, OSIS number, the data, and whether or not I was present every single day. I built a python script that uses Selenium to sign in to my school account, go to
                           the Google Form, fill out the form, and submit it. I've been using it everyday since then.`,
                    Tags: ["Python", "Selenium", "Automation"]
                },
                {
                    Name: "Calculator App",
                    Date: "04/23/2020",
                    Meta: `This was one of my first android projects. I first built a basic calculator app that would only allow the user to multiply, divide, add, and subtract. I then expanded
                           the app by adding logic to solve simple matrices, which I used for a short while in my Pre-Calculus class.`,
                    Tags: ["Android", "Kotlin", "Java"]
                },
                {
                    Name: "Behavr",
                    Date: "07/19/2020",
                    Meta: `I built a cross-platform app with two other interns which asks a user a myriad of questions and prompts them to asnwer using 150 or more characters. Users can check 
                           their history of anwered questions and can edit them. We collected their responses, keystrokes, and timed how long it took them to answer each question. I focused
                           on each user's writing style (stylometry). I had to then preprocess the data using Pandas, visualize different stylometric data reflected in each users using NLP libraries
                           and Matplotlib. Finally I created machine learning models to train the data and attempt to predict a user based on their writing style. I was able to achieve 97% accuracy
                           using a SVM model.`,
                    Tags: ["React Native", "Firebase", "Machine Learning", "NLP", "SVM", "Stylometry"]
                },
                {
                    Name: "Encryption",
                    Date: "01/01/2021",
                    Meta: `I built a console application to test different encryption algorithms such as AES, SHA-256, and RSA. I created users and encrypted their passwords and SSNs and logged
                           the encrypted value to the console.`,
                    Tags: ["C#", ".NET", "SHA-256", "AES", "RSA"]
                }
            ]
        }
    };

}

export default detailsOn;