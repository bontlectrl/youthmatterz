import { ArrowLeft, Users, Clock, Shield, Star, Sprout, Heart } from 'lucide-react';

interface FoodHeroesProps {
  onNavigate: (page: string) => void;
}

export default function FoodHeroes({ onNavigate }: FoodHeroesProps) {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-gradient-to-br from-green-500 to-green-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-green-100 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Home
          </button>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Food Heroes Workshop
          </h1>
          <p className="text-xl text-green-100 leading-relaxed">
            A fun, interactive workshop that teaches young learners about responsible food habits and sustainability through play.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Workshop Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Food Heroes is designed specifically for children aged 7-11, making complex topics like sustainability and food systems accessible through games, storytelling, and hands-on activities. Young learners discover where their food comes from, why food waste matters, and how they can make better everyday choices.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Through engaging activities and age-appropriate content, children develop a deeper understanding of their relationship with food while building teamwork and communication skills.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Learning Outcomes
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Sprout className="text-yellow-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Where Food Comes From
              </h3>
              <p className="text-gray-700">
                Children learn about the journey of food from farm to table, understanding the people and processes involved.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Heart className="text-yellow-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Reducing Food Waste
              </h3>
              <p className="text-gray-700">
                Understanding why food waste is a problem and simple actions they can take to reduce waste at home and school.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Star className="text-yellow-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Making Better Choices
              </h3>
              <p className="text-gray-700">
                Empowering children to make informed decisions about food in their daily lives.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Users className="text-yellow-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Learning Through Play
              </h3>
              <p className="text-gray-700">
                Interactive games, storytelling, and hands-on activities that make learning fun and memorable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">How It's Delivered</h2>

          <div className="bg-white border-2 border-gray-200 p-8 rounded-2xl">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Welcome & Introduction</h3>
                  <p className="text-gray-700">Setting the scene with engaging storytelling and introducing key concepts.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Interactive Games</h3>
                  <p className="text-gray-700">Fun, educational activities that teach food systems and sustainability concepts.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Group Activities</h3>
                  <p className="text-gray-700">Collaborative challenges that build teamwork and problem-solving skills.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Reflection & Takeaways</h3>
                  <p className="text-gray-700">Discussing what they've learned and how they can be food heroes at home.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Practical Details</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Users className="text-yellow-600" size={20} />
                <span className="font-semibold text-gray-900">Age Group</span>
              </div>
              <p className="text-gray-700">7-11 years old</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="text-yellow-600" size={20} />
                <span className="font-semibold text-gray-900">Duration</span>
              </div>
              <p className="text-gray-700">90-120 minutes</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Users className="text-yellow-600" size={20} />
                <span className="font-semibold text-gray-900">Group Size</span>
              </div>
              <p className="text-gray-700">Up to 30 students</p>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border-2 border-blue-200 p-6 rounded-2xl">
            <div className="flex items-start gap-4">
              <Shield className="text-blue-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Child Safety & Wellbeing</h3>
                <p className="text-gray-700">
                  All facilitators have current Working With Children Checks and are trained in child safety practices. We maintain a safe, inclusive, and supportive learning environment for all participants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What Teachers Say</h2>

          <div className="bg-gradient-to-br from-yellow-50 to-green-50 p-8 rounded-2xl border-2 border-yellow-200">
            <p className="text-lg text-gray-700 italic mb-4">
              "The Food Heroes workshop was engaging from start to finish. The children were excited to learn and came away with practical knowledge they could apply immediately. The facilitators were wonderful with the kids."
            </p>
            <p className="text-gray-900 font-semibold">Primary School Teacher</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Book Food Heroes?
          </h2>
          <p className="text-lg text-green-100 mb-10">
            Bring this engaging workshop to your school or organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg"
            >
              Book a Workshop
            </button>
            <button
              onClick={() => onNavigate('home')}
              className="bg-white hover:bg-gray-50 text-green-700 font-semibold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg"
            >
              Explore Other Programs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
