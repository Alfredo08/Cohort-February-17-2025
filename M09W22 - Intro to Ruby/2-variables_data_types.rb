=begin
    Primitve
    - Strings
    - Numbers
        * Integer
        * Float
    - Boolean
        * TrueClass
        * FalsClass
    - Nil

    Composite
    - Arrays/Lists
    - Hashes
    - Classes and objects
=end
first_name = "Alex"
last_name = 'Miller'
age = 25
grade = 9.8
graduated = true
extra_certificate = nil

puts first_name, first_name.class
puts last_name, last_name.class
puts age, age.class
puts grade, grade.class
puts graduated, graduated.class
puts extra_certificate, extra_certificate.class

num = 3

puts num / 2   # Integer / Integer => Integer
puts num / 2.0 # Integer / Float   => Float

PI = 3.1416
puts PI
PI = 123.123
puts PI