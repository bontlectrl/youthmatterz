import { ArrowRight, Users, Lightbulb, Target, Heart, Sprout, Handshake } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-blue-50 to-yellow-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Empowering the Next Generation<br />of Changemakers
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
              Practical programs that equip young people with the skills, confidence, and mindset to create real impact in their communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const element = document.getElementById('programs');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg inline-flex items-center justify-center gap-2"
              >
                Explore Programs
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-white hover:bg-gray-50 text-gray-900 font-semibold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg border-2 border-gray-200"
              >
                Partner With Us
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Learning Beyond the Classroom
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Youth Matterz creates learning experiences that go beyond the classroom. Through interactive workshops and programs, we help young people think critically, lead confidently, and take action in their communities.
          </p>
        </div>
      </section>

      <section id="programs" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
            Our Programs
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <Lightbulb size={64} className="text-white" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Young Changemakers Summer School
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  A one-week holiday program designed for teenagers to explore sustainability, entrepreneurship, and leadership through hands-on learning.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-yellow-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Sustainability & the SDGs</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-yellow-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Entrepreneurial thinking</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-yellow-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Leadership development</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-yellow-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Solving real community challenges</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-yellow-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Final presentations of ideas</span>
                  </div>
                </div>
                <button
                  onClick={() => onNavigate('summer-school')}
                  className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-6 py-3 rounded-full transition-all inline-flex items-center gap-2"
                >
                  Learn More
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                <Sprout size={64} className="text-white" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Food Heroes Workshop
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  A fun, interactive workshop for younger learners (ages 7–11) that teaches responsible food habits, teamwork, and sustainability through games and storytelling.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-yellow-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Where food comes from</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-yellow-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Reducing food waste</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-yellow-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Making better everyday choices</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-yellow-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Learning through play</span>
                  </div>
                </div>
                <button
                  onClick={() => onNavigate('food-heroes')}
                  className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-6 py-3 rounded-full transition-all inline-flex items-center gap-2"
                >
                  Book a Workshop
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
            Building Skills That Matter
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="text-yellow-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Critical Thinking</h3>
              <p className="text-gray-700">Analyzing challenges and creating thoughtful solutions</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-yellow-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Problem-Solving</h3>
              <p className="text-gray-700">Tackling real-world issues with creativity</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-yellow-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Confidence & Communication</h3>
              <p className="text-gray-700">Speaking up and sharing ideas with clarity</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-yellow-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Teamwork & Collaboration</h3>
              <p className="text-gray-700">Working together towards common goals</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sprout className="text-yellow-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Awareness</h3>
              <p className="text-gray-700">Understanding local and global challenges</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="text-yellow-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Leadership</h3>
              <p className="text-gray-700">Taking initiative and inspiring others</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 to-yellow-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-lg text-gray-700 mb-12">For Schools & Organizations</p>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Reach Out</h3>
              <p className="text-sm text-gray-700">Express your interest</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Receive Details</h3>
              <p className="text-sm text-gray-700">Get program information</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Confirm Schedule</h3>
              <p className="text-sm text-gray-700">Lock in your dates</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                4
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Program Delivered</h3>
              <p className="text-sm text-gray-700">We come to you</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Partner With Us
          </h2>
          <p className="text-lg mb-10 text-blue-100">
            We work with schools, organisations, and communities to deliver meaningful learning experiences for young people.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg"
            >
              Contact Us
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white hover:bg-gray-50 text-blue-700 font-semibold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg"
            >
              Book a Program
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
