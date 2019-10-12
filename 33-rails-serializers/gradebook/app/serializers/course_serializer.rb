class CourseSerializer < ActiveModel::Serializer
  attributes :id, :name, :teacher_id, :textbook
  has_many :assignments

end
