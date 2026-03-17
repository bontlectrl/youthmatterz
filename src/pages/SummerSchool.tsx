import { ArrowLeft, Users, Calendar, Target, Award, CheckCircle } from 'lucide-react';

interface SummerSchoolProps {
  onNavigate: (page: string) => void;
}

export default function SummerSchool({ onNavigate }: SummerSchoolProps) {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-gradient-to-br from-blue-500 to-blue-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-blue-100 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Home
          </button>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Young Changemakers Summer School
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            A transformative one-week program that empowers teenagers to become the changemakers their communities need.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Program Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            The Young Changemakers Summer School is an intensive, hands-on program designed for teenagers aged 14-18. Over the course of one week, students dive deep into sustainability, entrepreneurship, and leadership, learning how to identify challenges in their communities and develop practical solutions.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            This isn't passive learning - it's active engagement. Students work in teams, learn from real-world examples, and develop their own projects that address genuine community needs.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            What Students Will Learn
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Target className="text-yellow-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Sustainability & the SDGs
              </h3>
              <p className="text-gray-700">
                Understanding the United Nations Sustainable Development Goals and how they apply to local and global challenges.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Award className="text-yellow-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Entrepreneurial Thinking
              </h3>
              <p className="text-gray-700">
                Developing innovative solutions, understanding value creation, and thinking like social entrepreneurs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Users className="text-yellow-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Leadership Development
              </h3>
              <p className="text-gray-700">
                Building confidence, public speaking skills, and the ability to inspire others to take action.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="text-yellow-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Real Community Challenges
              </h3>
              <p className="text-gray-700">
                Identifying actual problems in their communities and working collaboratively to develop actionable solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Program Outcomes</h2>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Increased Confidence</h3>
                <p className="text-gray-700">Students gain the confidence to speak up, share ideas, and take leadership roles.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Critical Thinking Skills</h3>
                <p className="text-gray-700">Developing the ability to analyze complex problems and create thoughtful solutions.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Collaborative Project</h3>
                <p className="text-gray-700">Each team completes a full project proposal addressing a real community challenge.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Presentation Skills</h3>
                <p className="text-gray-700">Students present their projects to peers and facilitators, honing communication skills.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Network & Community</h3>
                <p className="text-gray-700">Building connections with like-minded peers and understanding the power of collaboration.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Program Format</h2>

          <div className="bg-white p-8 rounded-2xl shadow-md">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="text-yellow-600" size={20} />
                  <span className="font-semibold text-gray-900">Duration</span>
                </div>
                <p className="text-gray-700">One week intensive program</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Users className="text-yellow-600" size={20} />
                  <span className="font-semibold text-gray-900">Age Group</span>
                </div>
                <p className="text-gray-700">14-18 years old</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Target className="text-yellow-600" size={20} />
                  <span className="font-semibold text-gray-900">Format</span>
                </div>
                <p className="text-gray-700">Interactive & group-based</p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="font-semibold text-gray-900 mb-4">What to Expect</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 mt-1">•</span>
                  <span>Daily workshops combining theory with hands-on activities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 mt-1">•</span>
                  <span>Team-based project development throughout the week</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 mt-1">•</span>
                  <span>Guest speakers and real-world case studies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 mt-1">•</span>
                  <span>Final presentation day where teams showcase their solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Bring This to Your School?
          </h2>
          <p className="text-lg text-blue-100 mb-10">
            Get in touch to learn more about hosting the Young Changemakers Summer School.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg"
            >
              Apply or Register
            </button>
            <button
              onClick={() => onNavigate('home')}
              className="bg-white hover:bg-gray-50 text-blue-700 font-semibold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg"
            >
              Explore Other Programs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
