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