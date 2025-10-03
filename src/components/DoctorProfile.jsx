import { Phone, Mail, MapPin, Clock, Calendar, Star, Stethoscope } from 'lucide-react';

export default function DoctorProfile() {
  return (
    <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="md:flex">
        {/* Left Column - Doctor Image */}
        <div className="md:w-1/3 relative p-8">
          <div className="relative">
            <img 
              src="/pramod.png" 
              alt="Dr. John Smith" 
              className="w-full h-auto rounded-2xl shadow-md"
            />
            <div className="absolute -bottom-4 -right-4 bg-blue-100 p-3 rounded-full">
              <Stethoscope className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1.5 rounded-full">
              <Clock className="h-4 w-4 mr-1" />
              <span>Available Today</span>
            </div>
          </div>
        </div>

        {/* Right Column - Doctor Info */}
        <div className="md:w-2/3 p-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dr. John Smith</h1>
              <p className="text-blue-600 font-medium mt-1">Cardiologist</p>
            </div>
            <div className="flex items-center bg-amber-100 text-amber-800 text-sm font-medium px-3 py-1 rounded-full">
              <Star className="h-4 w-4 fill-amber-400 mr-1" />
              <span>4.9 (120)</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="flex items-center text-gray-600">
              <Phone className="h-5 w-5 text-blue-600 mr-2" />
              <span>+1 234 567 890</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Mail className="h-5 w-5 text-blue-600 mr-2" />
              <span>john.smith@example.com</span>
            </div>
            <div className="flex items-start text-gray-600 md:col-span-2">
              <MapPin className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
              <span>123 Medical Center Drive, Suite 456, San Francisco, CA 94158</span>
            </div>
          </div>

          {/* About Doctor */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">About Doctor</h2>
            <p className="text-gray-600 leading-relaxed">
              Dr. John Smith is a board-certified cardiologist with over 12 years of experience in treating 
              cardiovascular diseases. He specializes in interventional cardiology and has performed over 1,000 
              successful procedures. Dr. Smith is dedicated to providing personalized care to his patients.
            </p>
          </div>

          {/* Working Hours */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Working Hours</h2>
            <div className="space-y-3">
              {[
                { day: 'Monday - Friday', time: '9:00 AM - 5:00 PM' },
                { day: 'Saturday', time: '9:00 AM - 2:00 PM' },
                { day: 'Sunday', time: 'Closed' }
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">{item.day}</span>
                  </div>
                  <span className="text-gray-600 font-medium">{item.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <button className="mt-10 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex items-center justify-center">
            <span>Book Appointment</span>
          </button>
        </div>
      </div>
    </div>
  );
}