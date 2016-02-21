class List < ActiveRecord::Base
    belongs_to :owner, class_name:'User'
    has_many :list_targets
    has_many :targets, through: :list_targets
end
