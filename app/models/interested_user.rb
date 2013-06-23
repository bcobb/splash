class InterestedUser < ActiveRecord::Base
  validates :email, presence: true
end
