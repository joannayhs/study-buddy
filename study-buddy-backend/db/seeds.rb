# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


quiz = Quiz.create(title: "Fractions", subject: "Math")
quiz.questions.build(text: "If the fraction N/6 is equivalent to 2/3, what is the value of N?")
quiz.save
first_question = Question.all.first
first_question.options.build(text: "N = 2", correct: false)
first_question.save
first_question.options.build(text: "N = 1", correct: false)
first_question.save
first_question.options.build(text: "N = 4", correct: true)
first_question.save
first_question.options.build(text: "N = 3", correct: false)
first_question.save

quiz.questions.build(text: "Half of half is the same as...")
quiz.save
second_question = Question.all[1]
second_question.options.build(text: "1/2", correct:  false)
second_question.save
second_question.options.build(text: "1/4", correct: true)
second_question.save
second_question.options.build(text: "2/4", correct: false)
second_question.save
second_question.options.build(text: "3/4", correct: false)
second_question.save

quiz_two = Quiz.create(title: "US Presidents", subject: "Social Studies")
question_one = quiz_two.questions.build(text: "Who was the 16th president of the United States?")
quiz_two.save
question_one.options.build(text: "George Washington", correct: false)
question_one.save
question_one.options.build(text: "John Adams", correct: false)
question_one.save
question_one.options.build(text: "Abraham Lincoln", correct: true)
question_one.save
question_one.options.build(text: "Thomas Jefferson", correct: false)
question_one.save

quiz_three = Quiz.create(title: "US Capitals", subject: "Social Studies")
question_one = quiz_three.questions.build(text: "What is the capital of New Jersey?")
quiz_three.save
question_one.options.build(text: "Hamilton", correct: false)
question_one.save
question_one.options.build(text: "Jersey City", correct: false)
question_one.save
question_one.options.build(text: "Trenton", correct: true)
question_one.save
question_one.options.build(text: "Thomas Jefferson", correct: false)
question_one.save

question_two = quiz_three.questions.build(text: "What is the capital of New York?")
quiz_three.save
question_two.options.build(text: "New York City", correct: false)
question_two.save
question_two.options.build(text: "Albany", correct: true)
question_two.save
question_two.options.build(text: "Yonkers", correct: false)
question_two.save
question_two.options.build(text: "Rochester", correct: false)
question_two.save

question_three = quiz_three.questions.build(text: "What is the capital of Pennsylvania?")
quiz_three.save
question_three.options.build(text: "Philadelphia", correct: false)
question_three.save
question_three.options.build(text: "Pittsburgh", correct: false)
question_three.save
question_three.options.build(text: "Harrisburg", correct: true)
question_three.save
question_three.options.build(text: "West Chester", correct: false)
question_three.save