export const techIcons: Record<string, string> = {
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "React Native": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "SQL Server": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
  "Azure": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  "Azure Blob Storage": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  "Framer Motion": "https://pagepro.co/blog/wp-content/uploads/2020/03/framer-motion.png", // Custom or fallback
  "Vite": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "OpenAI": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1024px-ChatGPT_logo.svg.png",
  "Llama 3b": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Meta_logo_primary_2024.svg/200px-Meta_logo_primary_2024.svg.png", // Meta logo
  "Simio": "https://www.simio.com/wp-content/uploads/2023/10/Simio-Logo-1.png", // Simio logo
  "MATLAB": "https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png",
  "IoT": "https://cdn-icons-png.flaticon.com/512/2618/2618521.png",
  "Blockchain": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blockchain/blockchain-original.svg",
  "Solidity": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg",
  "Web3": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/web3/web3-original.svg",
  "Ethereum": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ethereum/ethereum-original.svg",

  "Smart Contracts": "https://cdn-icons-png.flaticon.com/512/4257/4257484.png",
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "MariaDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg"
};

export const getTechIcon = (tech: string): string => {
  // Try direct match
  if (techIcons[tech]) return techIcons[tech];
  
  // Try matching parts of the string
  const lowerTech = tech.toLowerCase();
  
  if (lowerTech.includes('react')) return techIcons['React'];
  if (lowerTech.includes('node')) return techIcons['Node.js'];
  if (lowerTech.includes('python')) return techIcons['Python'];
  if (lowerTech.includes('sql') && !lowerTech.includes('my') && !lowerTech.includes('postgre')) return techIcons['SQL Server'];
  if (lowerTech.includes('mysql')) return techIcons['MySQL'];
  if (lowerTech.includes('mariadb')) return techIcons['MariaDB'];
  if (lowerTech.includes('azure')) return techIcons['Azure'];
  if (lowerTech.includes('aws')) return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg";
  
  // Default fallback
  return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg";
};
