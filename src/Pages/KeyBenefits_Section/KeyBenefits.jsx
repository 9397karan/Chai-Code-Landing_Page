import React from 'react';
import './KeyBenefits.css';
import NetworkAnimation from '../../components/NetworkAnimation';

const KeyBenefits = () => {
  return (
    <div className="key-benefits-container">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">
          Key Benefits of Cohorts
        </h1>
        
        <p className="text-xl text-center mb-16 text-gray-300">
          Cohorts are the best way to learn because you finish the course in a timely manner.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Benefit 1 */}
          <div className="benefit-card">
            <div><img src="./professional.png" className='w-16 mb-2' alt="" /></div>
            <h2 className="text-2xl font-semibold mb-4 text-orange-400">Taught by Professionals</h2>
            <p className="text-gray-300 mb-4">
              Our cohorts are being taught by top industry experts and educators.
            </p>
            <div className="code-block">
              <pre><code>class Teacher: EducateProfessional()</code></pre>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="benefit-card">
          <div><img src="./review.png" className='w-16 mb-2' alt="" /></div>
            <h2 className="text-2xl font-semibold mb-4 text-orange-400">Best Code Reviews</h2>
            <p className="text-gray-300 mb-4">
              We provide detailed feedback on every code assignment, selected as approved per case.
            </p>
            <div className="code-block">
              <pre><code>// Refactor this for better performance</code></pre>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="benefit-card">
          <div><img src="./bounty.png" className='w-16 mb-2' alt="" /></div>
            <h2 className="text-2xl font-semibold mb-4 text-orange-400">Bounties</h2>
            <p className="text-gray-300 mb-4">
              Learn courses, write more code to master methods, and better understand concepts at your level.
            </p>
            <div className="code-block">
              <pre><code>const reward = studentBalance(difficulty)</code></pre>
            </div>
          </div>

          {/* Benefit 4 */}
          <div className="benefit-card">
            <h2 className="text-2xl font-semibold mb-4 text-orange-400">Leet Lab</h2>
            <p className="text-gray-300 mb-4">
              Our labs feature carefully crafted patterns that help you understand the foundation of programming languages.
            </p>
            <div className="code-block">
              <pre><code>function getHistoricalLevel(question) {'{ /* ... */ }'}</code></pre>
            </div>
          </div>

          {/* Benefit 5 */}
          <div className="benefit-card">
            <h2 className="text-2xl font-semibold mb-4 text-orange-400">Collaborative Learning</h2>
            <p className="text-gray-300 mb-4">
              There's nothing like discussing with fellow learners and solving bugs together.
            </p>
            <div className="code-block">
              <pre><code>{'while(output) { studentValues(question) }'}</code></pre>
            </div>
          </div>

          {/* Benefit 6 */}
          <div className="benefit-card">
            <h2 className="text-2xl font-semibold mb-4 text-orange-400">Revision Classes</h2>
            <p className="text-gray-300 mb-4">
              We have dedicated revision sessions where learners can reinforce concepts and target weak areas.
            </p>
            <div className="code-block">
              <pre><code>{'for(int i = 0; i < concepts.length; i++) { predict() }'}</code></pre>
            </div>
          </div>
        </div>

        {/* Alumni Network Section */}
        <div className="mt-16 p-8 md:flex gap-5 rounded-xl bg-gradient-to-br from-orange-900/10 items-center to-amber-900/5 border border-orange-500/30">
          <div><NetworkAnimation/></div>
          <div><h2 className="text-3xl mt-3 font-bold mb-6  text-amber-300">Alumni Network and Job Listings</h2>
          <p className="text-gray-300 text-md ">
            The alumni network you always wished for in college. We have a dedicated platform where students connect, 
            collaborate on projects, form agencies, and build relationships.
            <br/>
            <br/>
            Our HR team also posts regular job updates that you can apply to directly when you're ready.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyBenefits;