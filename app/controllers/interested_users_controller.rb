class InterestedUsersController < ApplicationController

  def new
    @interested_user = InterestedUser.new
  end

  def create
    @interested_user = InterestedUser.new(interested_user_params)
    @interested_user.save

    render :nothing => true
  end

  private

  def interested_user_params
    params.require(:interested_user).permit(:email)
  end

end
