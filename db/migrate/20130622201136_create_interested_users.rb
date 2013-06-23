class CreateInterestedUsers < ActiveRecord::Migration
  def change
    create_table :interested_users do |t|
      t.string :email, :null => false

      t.timestamps
    end
  end
end
