class TeacherSerializer < ActiveModel::Serializer
  attributes :id, :name, :subject, :professor_name, :name_screamed
  has_many :courses

  def name_screamed
    "#{self.object.name}".upcase
  end

end
