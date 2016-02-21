class ListTarget < ActiveRecord::Base
    belongs_to :list
    belongs_to :target, class_name: 'User'
end
