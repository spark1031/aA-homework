class UserMailer < ApplicationMailer
  default from: 'everybody@appacademy.io'

  def self.welcome_email(user)
    @user = user
    @url = 'http://example.com/login'
    mail(to: @user.email, subject: 'Welcome to 99Cats!')
  end
end
