class CreateListTargets < ActiveRecord::Migration
  def change
    create_table :list_targets do |t|
      t.integer :list_id
      t.integer :target_id

      t.timestamps null: false
    end
  end
end
