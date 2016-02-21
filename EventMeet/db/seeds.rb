# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

20.times do |i|
  User.create(username: "user#{i}", email: "user#{i}@gmail.com")
end

5.times do |i|
  4.times do |r|
    list = List.create(owner_id: User.find(i+1), title: "list#{i+1}")
  end
end

5.times do |r|
  4.times do |i|
    ListTarget.create(list_id: List.find(i+1), target_id: r+1)
  end
end



