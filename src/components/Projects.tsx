import React from 'react';
import { FolderGit2 } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <FolderGit2 className="mr-2" /> Projects
      </h2>
      <div className="space-y-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">System For Identifying Fake Product Using Blockchain Technology</h3>
          <ul className="list-disc list-inside">
            <li>An e-commerce website, using blockchain technology to verify the genuineness of products</li>
            <li>Generate QR code for the product based on genuine customer reviews</li>
          </ul>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">Big Data Exchange in Cloud Environment</h3>
          <ul className="list-disc list-inside">
            <li>Exchanging large volumes of data in cloud storage environments between group members</li>
            <li>Ensuring the safety and security of data stored in the cloud</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;