class ListTarget < ActiveRecord::Base
    has_many :targets, class_name:'User'
    belongs_to :list
end
