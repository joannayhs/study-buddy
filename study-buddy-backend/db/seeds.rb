# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


quizone = Quiz.create(title: "Fractions", subject: "Math")
qoneqone = quizone.questions.build(text: "If the fraction N/6 is equivalent to 2/3, what is the value of N?")
quizone.save
qoneqone.options.build(text: "N = 2", correct: false)
qoneqone.save
qoneqone.options.build(text: "N = 1", correct: false)
qoneqone.save
qoneqone.options.build(text: "N = 4", correct: true)
qoneqone.save
qoneqone.options.build(text: "N = 3", correct: false)
qoneqone.save

qoneqtwo = quizone.questions.build(text: "Half of half is the same as...")
quizone.save
qoneqtwo.options.build(text: "1/2", correct:  false)
qoneqtwo.save
qoneqtwo.options.build(text: "1/4", correct: true)
qoneqtwo.save
qoneqtwo.options.build(text: "2/4", correct: false)
qoneqtwo.save
qoneqtwo.options.build(text: "3/4", correct: false)
qoneqtwo.save

quiztwo = Quiz.create(title: "US Presidents", subject: "Social Studies")
qtwoqone = quiztwo.questions.build(text: "Who was the 16th president of the United States?")
quiztwo.save
qtwoqone.options.build(text: "George Washington", correct: false)
qtwoqone.save
qtwoqone.options.build(text: "John Adams", correct: false)
qtwoqone.save
qtwoqone.options.build(text: "Abraham Lincoln", correct: true)
qtwoqone.save
qtwoqone.options.build(text: "Thomas Jefferson", correct: false)
qtwoqone.save

quizthree = Quiz.create(title: "US Capitals", subject: "Social Studies")
qthreeqone = quizthree.questions.build(text: "What is the capital of New Jersey?")
quizthree.save
qthreeqone.options.build(text: "Hamilton", correct: false)
qthreeqone.save
qthreeqone.options.build(text: "Jersey City", correct: false)
qthreeqone.save
qthreeqone.options.build(text: "Trenton", correct: true)
qthreeqone.save
qthreeqone.options.build(text: "Thomas Jefferson", correct: false)
qthreeqone.save

qthreeqtwo = quizthree.questions.build(text: "What is the capital of New York?")
quizthree.save
qthreeqtwo.options.build(text: "New York City", correct: false)
qthreeqtwo.save
qthreeqtwo.options.build(text: "Albany", correct: true)
qthreeqtwo.save
qthreeqtwo.options.build(text: "Yonkers", correct: false)
qthreeqtwo.save
qthreeqtwo.options.build(text: "Rochester", correct: false)
qthreeqtwo.save

qthreeqthree = quizthree.questions.build(text: "What is the capital of Pennsylvania?")
quizthree.save
qthreeqthree.options.build(text: "Philadelphia", correct: false)
qthreeqthree.save
qthreeqthree.options.build(text: "Pittsburgh", correct: false)
qthreeqthree.save
qthreeqthree.options.build(text: "Harrisburg", correct: true)
qthreeqthree.save
qthreeqthree.options.build(text: "West Chester", correct: false)
qthreeqthree.save

quizfour = Quiz.create(title: "4th Grade Science", subject: "Science")
qfourqone = quizfour.questions.build(text: "In which of these seasons will you see a rainbow more often?")
quizfour.save
qfourqone.options.build(text: "Summer", correct: false )
qfourqone.save
qfourqone.options.build(text: "Monsoon", correct: true)
qfourqone.save
qfourqone.options.build(text: "Winter", correct: false)
qfourqone.save
qfourqone.options.build(text: "Rainbows can be seen at all times, even at night.", correct: false)
qfourqone.save

qfourqtwo = quizfour.questions.build(text: "Which of these grows from a seed?")
quizfour.save
qfourqtwo.options.build(text: "Ant", correct: false)
qfourqtwo.save
qfourqtwo.options.build(text: "Donkey", correct: false)
qfourqtwo.save
qfourqtwo.options.build(text: "Grass", correct: true)
qfourqtwo.save
qfourqtwo.options.build(text: "Caterpillar", correct: false)
qfourqtwo.save

qfourqthree = quizfour.questions.build(text: "Which material comes from an animal and is used to make clothes?")
quizfour.save
qfourqthree.options.build(text: "Silk", correct: true)
qfourqthree.save
qfourqthree.options.build(text: "Iron", correct: false)
qfourqthree.save
qfourqthree.options.build(text: "Cotton", correct: false)
qfourqthree.save
qfourqthree.options.build(text: "Wax", correct: false)
qfourqthree.save

qfourqfour = quizfour.questions.build(text: "Shelia has brown eyes. Which of the following family members could she have inherited them from?")
quizfour.save
qfourqfour.options.build(text: "Her niece", correct: false)
qfourqfour.save
qfourqfour.options.build(text: "Her sister", correct: false)
qfourqfour.save
qfourqfour.options.build(text: "Her daughter", correct: false)
qfourqfour.save
qfourqfour.options.build(text: "Her grandmother", correct: true)
qfourqfour.save

qfourqfive = quizfour.questions.build(text: "When a coin is dropped in a glass of water, it will: ")
quizfour.save
qfourqfive.options.build(text: "Float",correct: false)
qfourqfive.save
qfourqfive.options.build(text: "Sink",correct: true)
qfourqfive.save
qfourqfive.options.build(text: "Float mid-way",correct: false)
qfourqfive.save
qfourqfive.options.build(text: "Break the glass",correct: false)
qfourqfive.save


qfourqsix = quizfour.questions.build(text: "The change of a substance from a liquid state to a gaseous state is called: ")
quizfour.save
qfourqsix.options.build(text: "Evaporation", correct: true)
qfourqsix.save
qfourqsix.options.build(text: "Condensation", correct: false)
qfourqsix.save
qfourqsix.options.build(text: "Sublimation", correct: false)
qfourqsix.save
qfourqsix.options.build(text: "Filtration", correct: false)
qfourqsix.save


qfourqseven = quizfour.questions.build(text: "The change of a substance from a gaseous state to a liquid state is called: ")
quizfour.save
qfourqseven.options.build(text: "Condensation", correct: true)
qfourqseven.save
qfourqseven.options.build(text: "Decantation", correct: false)
qfourqseven.save
qfourqseven.options.build(text: "Sedimentation", correct: false)
qfourqseven.save
qfourqseven.options.build(text: "Evaporation", correct: false)
qfourqseven.save


qfourqeight = quizfour.questions.build(text: "The change from a solid state to the gaseous state is called: ")
quizfour.save
qfourqeight.options.build(text: "Sublimation", correct: true)
qfourqeight.save
qfourqeight.options.build(text: "Evaporation", correct: false)
qfourqeight.save
qfourqeight.options.build(text: "Melting", correct: false)
qfourqeight.save
qfourqeight.options.build(text: "Filtration", correct: false)
qfourqeight.save

quizfive = Quiz.create(title: "Subjects & Predicates", subject: "English")

qfiveqone = quizfive.questions.build(text: "The cold wind was blowing out of the north today. The simple subject is: ")
quizfive.save
qfiveqone.options.build(text: "Was", correct: false)
qfiveqone.save
qfiveqone.options.build(text: "North", correct: false)
qfiveqone.save
qfiveqone.options.build(text: "Wind", correct: true)
qfiveqone.save
qfiveqone.options.build(text: "Today", correct: false)
qfiveqone.save

qfiveqtwo = quizfive.questions.build(text: "Dark cloud hung low on the horizon. ______ is the complete prediate.")
quizfive.save
qfiveqtwo.options.build(text: "Dark clouds", correct: false)
qfiveqtwo.save
qfiveqtwo.options.build(text: "Hung low", correct: false)
qfiveqtwo.save
qfiveqtwo.options.build(text: "On the horizon", correct: false)
qfiveqtwo.save
qfiveqtwo.options.build(text: "Hung low on the horizon", correct: true)
qfiveqtwo.save

qfiveqthree = quizfive.questions.build(text: "A huge yellow snowplow is clearing the streets during the night. The complete subject is: ")
quizfive.save
qfiveqthree.options.build(text: "A huge yellow snowplow", correct: true)
qfiveqthree.save
qfiveqthree.options.build(text: "Snowplow", correct: false)
qfiveqthree.save
qfiveqthree.options.build(text: "Is clearing", correct: false)
qfiveqthree.save
qfiveqthree.options.build(text: "During the night", correct: false)
qfiveqthree.save

qfiveqfour = quizfive.questions.build(text: "Many Eagle's fans listen attentively to the announcer's voice. The simple predicate is: ")
quizfive.save
qfiveqfour.options.build(text: "Eagle's fans", correct: false)
qfiveqfour.save
qfiveqfour.options.build(text: "The announcer's voice", correct: false)
qfiveqfour.save
qfiveqfour.options.build(text: "Listen", correct: true)
qfiveqfour.save
qfiveqfour.options.build(text: "Fans", correct: false)
qfiveqfour.save

qfiveqfive = quizfive.questions.build(text: "My cousin Aiden likes to fish with his brother when they go camping. The complete subject is: ")
quizfive.save
qfiveqfive.options.build(text: "Aiden", correct: false)
qfiveqfive.save
qfiveqfive.options.build(text: "My cousin Aiden", correct: true)
qfiveqfive.save
qfiveqfive.options.build(text: "Likes to fish", correct: false)
qfiveqfive.save
qfiveqfive.options.build(text: "With his brother", correct: false)
qfiveqfive.save

qfiveqsix = quizfive.questions.build(text: "My cousin Aiden likes to fish with his brother when they go camping. The simple subject is: ")
quizfive.save
qfiveqsix.options.build(text: "Aiden", correct: true)
qfiveqsix.save
qfiveqsix.options.build(text: "My cousin Aiden", correct: false)
qfiveqsix.save
qfiveqsix.options.build(text: "Likes to fish", correct: false)
qfiveqsix.save
qfiveqsix.options.build(text: "With his brother", correct: false)
qfiveqsix.save

qfiveqseven = quizfive.questions.build(text: "Our 4th grade class went for a minute walk on the walking trail. The simple predicate is: ")
quizfive.save
qfiveqseven.options.build(text: "Class", correct: false)
qfiveqseven.save
qfiveqseven.options.build(text: "Our 4th grade class", correct: false)
qfiveqseven.save
qfiveqseven.options.build(text: "Went for a minute walk on the walking trail", correct: false)
qfiveqseven.save
qfiveqseven.options.build(text: "Went", correct: true)
qfiveqseven.save

qfiveqeight = quizfive.questions.build(text: "Our new house in Hopewell is large and beautiful. The simple predicate is: ")
quizfive.save
qfiveqeight.options.build(text: "Is large and beautiful", correct: false)
qfiveqeight.save
qfiveqeight.options.build(text: "Our new house", correct: false)
qfiveqeight.save
qfiveqeight.options.build(text: "Is", correct: true)
qfiveqeight.save
qfiveqeight.options.build(text: "House", correct: false)
qfiveqeight.save

qfiveqnine = quizfive.questions.build(text: "Someone's cell phone rang during the church service. The complete subject is: ")
quizfive.save
qfiveqnine.options.build(text: "Cell phone", correct: false)
qfiveqnine.save
qfiveqnine.options.build(text: "Someone's cell phone", correct: true)
qfiveqnine.save
qfiveqnine.options.build(text: "Rang", correct: false)
qfiveqnine.save
qfiveqnine.options.build(text: "Rang during the church service", correct: false)
qfiveqnine.save

qfiveqten = quizfive.questions.build(text: "Our new house in Hopewell is large and beautiful. The complete subject is: ")
quizfive.save
qfiveqten.options.build(text: "Our new house in Hopewell", correct: true)
qfiveqten.save
qfiveqten.options.build(text: "House", correct: false)
qfiveqten.save
qfiveqten.options.build(text: "Is", correct: false)
qfiveqten.save
qfiveqten.options.build(text: "Is large and beautiful", correct: false)
qfiveqten.save

quizsix = Quiz.create(title: "Weather", subject: "Science")

qsixqone = quizsix.questions.build(text: "When there is no rain for a while, it is a: ")
quizsix.save
qsixqone.options.build(text: "Flood", correct: false)
qsixqone.save
qsixqone.options.build(text: "Drought", correct: true)
qsixqone.save
qsixqone.options.build(text: "Tornado", correct: false)
qsixqone.save
qsixqone.options.build(text: "Hurricane", correct: false)
qsixqone.save

qsixqtwo = quizsix.questions.build(text: "On a weather map, an 'H' stands for: ")
quizsix.save
qsixqtwo.options.build(text: "Hot air", correct: false)
qsixqtwo.save
qsixqtwo.options.build(text: "Hard pressure", correct: false)
qsixqtwo.save
qsixqtwo.options.build(text: "Hot pressure", correct: false)
qsixqtwo.save
qsixqtwo.options.build(text: "High pressure", correct: true)
qsixqtwo.save

qsixqthree = quizsix.questions.build(text: "Which of the following is NOT an example of precipitation?")
quizsix.save
qsixqthree.options.build(text: "Rain", correct: false)
qsixqthree.save
qsixqthree.options.build(text: "Frost", correct: true)
qsixqthree.save
qsixqthree.options.build(text: "Hail", correct: false)
qsixqthree.save
qsixqthree.options.build(text: "Sleet", correct: false)
qsixqthree.save

qsixqfour = quizsix.questions.build(text: "The famous hurricane that hit New Orleans in 2005 was called: ")
quizsix.save
qsixqfour.options.build(text: "Bill", correct: false)
qsixqfour.save
qsixqfour.options.build(text: "Susan", correct: false)
qsixqfour.save
qsixqfour.options.build(text: "Anna", correct: false)
qsixqfour.save
qsixqfour.options.build(text: "Katrina", correct: true)
qsixqfour.save

qsixqfive = quizsix.questions.build(text: "Evaporation is: ")
quizsix.save
qsixqfive.options.build(text: "Gas to liquid", correct: false)
qsixqfive.save
qsixqfive.options.build(text: "Liquid to gas", correct: true)
qsixqfive.save
qsixqfive.options.build(text: "Gas to solid", correct: false)
qsixqfive.save
qsixqfive.options.build(text: "Solid to gas", correct: false)
qsixqfive.save

qsixqsix = quizsix.questions.build(text: "There are _____ categories of hurricanes.")
quizsix.save
qsixqsix.options.build(text: "Two", correct: false)
qsixqsix.save
qsixqsix.options.build(text: "Three", correct: false)
qsixqsix.save
qsixqsix.options.build(text: "Four", correct: false)
qsixqsix.save
qsixqsix.options.build(text: "Five", correct: true)
qsixqsix.save

qsixqseven = quizsix.questions.build(text: "These form over warm water")
quizsix.save
qsixqseven.options.build(text: "Flood", correct: false)
qsixqseven.save
qsixqseven.options.build(text: "Tornado", correct: false)
qsixqseven.save
qsixqseven.options.build(text: "Drought", correct: false)
qsixqseven.save
qsixqseven.options.build(text: "Hurricane", correct: true)
qsixqseven.save

qsixqeight = quizsix.questions.build(text: "There are  ______ stages of the water cycle.")
quizsix.save
qsixqeight.options.build(text: "Two", correct: false)
qsixqeight.save
qsixqeight.options.build(text: "Three", correct: true)
qsixqeight.save
qsixqeight.options.build(text: "Four", correct: false)
qsixqeight.save
qsixqeight.options.build(text: "Five", correct: false)
qsixqeight.save

qsixqnine = quizsix.questions.build(text: "On a weather map, an 'L' means: ")
quizsix.save
qsixqnine.options.build(text: "High pressure", correct: false)
qsixqnine.save
qsixqnine.options.build(text: "Lawn pressure", correct: false)
qsixqnine.save
qsixqnine.options.build(text: "Low pressure", correct: true)
qsixqnine.save
qsixqnine.options.build(text: "Light pressure", correct: false)
qsixqnine.save

qsixqten = quizsix.questions.build(text: "The center of a hurricane is called: ")
quizsix.save
qsixqten.options.build(text: "The center", correct: false)
qsixqten.save
qsixqten.options.build(text: "The eye", correct: true)
qsixqten.save
qsixqten.options.build(text: "The mouth", correct: false)
qsixqten.save
qsixqten.options.build(text: "The vortex", correct: false)
qsixqten.save

quizseven = Quiz.create(title: "4th Grade Math", subject: "Math")

qsevenqone = quizseven.questions.build(text: "The roman number for 18 is: ")
quizseven.save
qsevenqone.options.build(text: "XXVIII", correct: false)
qsevenqone.save
qsevenqone.options.build(text: "XVIII", correct: true)
qsevenqone.save
qsevenqone.options.build(text: "IVIII", correct: false)
qsevenqone.save
qsevenqone.options.build(text: "VVVIII", correct: false)
qsevenqone.save

qsevenqtwo = quizseven.questions.build(text: "The smallest 4-digit number formed using the digits 1, 3, 5, 6 is: ")
quizseven.save
qsevenqtwo.options.build(text: "5361", correct: false)
qsevenqtwo.save
qsevenqtwo.options.build(text: "3516", correct: false)
qsevenqtwo.save
qsevenqtwo.options.build(text: "1356", correct: true)
qsevenqtwo.save
qsevenqtwo.options.build(text: "1653", correct: false)
qsevenqtwo.save

qsevenqthree = quizseven.questions.build(text: "The largest four digit number is: ")
quizseven.save
qsevenqthree.options.build(text: "9999", correct: true)
qsevenqthree.save
qsevenqthree.options.build(text: "1000", correct: false)
qsevenqthree.save
qsevenqthree.options.build(text: "9000", correct: false)
qsevenqthree.save
qsevenqthree.options.build(text: "1990", correct: false)
qsevenqthree.save

qsevenqfour = quizseven.questions.build(text: "The smallest single digit composite number is: ")
quizseven.save
qsevenqfour.options.build(text: "9", correct: false)
qsevenqfour.save
qsevenqfour.options.build(text: "4", correct: true)
qsevenqfour.save
qsevenqfour.options.build(text: "2", correct: false)
qsevenqfour.save
qsevenqfour.options.build(text: "1", correct: false)
qsevenqfour.save

qsevenqfive = quizseven.questions.build(text: "The improper fraction among the following is: ")
quizseven.save
qsevenqfive.options.build(text: "4/7", correct: false)
qsevenqfive.save
qsevenqfive.options.build(text: "2/5", correct: false)
qsevenqfive.save
qsevenqfive.options.build(text: "3/3", correct: true)
qsevenqfive.save
qsevenqfive.options.build(text: "1/4", correct: false)
qsevenqfive.save

qsevenqsix = quizseven.questions.build(text: "19/6 is a number between: ")
quizseven.save
qsevenqsix.options.build(text: "2 and 3", correct: false)
qsevenqsix.save
qsevenqsix.options.build(text: "3 and 4", correct: true)
qsevenqsix.save
qsevenqsix.options.build(text: "19 and 20", correct: false)
qsevenqsix.save
qsevenqsix.options.build(text: "6 and 18", correct: false)
qsevenqsix.save

qsevenqseven = quizseven.questions.build(text: "How many one-sixths make 2?")
quizseven.save
qsevenqseven.options.build(text: "3", correct: false)
qsevenqseven.save
qsevenqseven.options.build(text: "6", correct: false)
qsevenqseven.save
qsevenqseven.options.build(text: "12", correct: true)
qsevenqseven.save
qsevenqseven.options.build(text: "15", correct: false)
qsevenqseven.save

qsevenqeight = quizseven.questions.build(text: "3 hundreths can be written as: ")
quizseven.save
qsevenqeight.options.build(text: "0.0003", correct: false)
qsevenqeight.save
qsevenqeight.options.build(text: "0.3", correct: false)
qsevenqeight.save
qsevenqeight.options.build(text: "300", correct:false )
qsevenqeight.save
qsevenqeight.options.build(text: "0.03", correct: true)
qsevenqeight.save

qsevenqnine = quizseven.questions.build(text:"0.07 = _____" )
quizseven.save
qsevenqnine.options.build(text: "7/10", correct: false)
qsevenqnine.save
qsevenqnine.options.build(text: "7/100", correct: true)
qsevenqnine.save
qsevenqnine.options.build(text: "70/10", correct: false)
qsevenqnine.save
qsevenqnine.options.build(text: "70/100", correct: false)
qsevenqnine.save

qsevenqten = quizseven.questions.build(text: "3 hours and 40 minutes = _____")
quizseven.save
qsevenqten.options.build(text: "120 minutes", correct: false)
qsevenqten.save
qsevenqten.options.build(text: "180 minutes", correct: false)
qsevenqten.save
qsevenqten.options.build(text: "220 minutes", correct: true)
qsevenqten.save
qsevenqten.options.build(text: "240 minutes", correct: false)
qsevenqten.save
