class CreateQuizzes < ActiveRecord::Migration[6.0]
  def change
    create_table :quizzes do |t|
      t.string :title
      t.string :subject
      t.boolean :completed, default: false

      t.timestamps
    end
  end
end
