class User < ActiveRecord::Base
    has_many :lists, foreign_key: :owner_id
    has_many :list_targets, foreign_key: :target_id
    # this is for which lists are the users become targets on
    has_many :targeted_lists, through: :list_targets, source: :list
end
g