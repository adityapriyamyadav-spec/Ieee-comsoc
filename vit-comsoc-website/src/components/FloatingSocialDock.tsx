const FloatingSocialDock = () => {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-4 px-6 py-3 bg-white/70 dark:bg-slate-800/60 backdrop-blur-md border border-quantum rounded-full shadow-lg">
      <a
        href="https://www.linkedin.com/company/ieee-comsoc-vit"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-quantum/10 hover:bg-quantum/20 flex items-center justify-center transition-colors"
        aria-label="LinkedIn"
      >
        <svg className="w-5 h-5 text-quantum" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784.79 1.75 1.764 1.764.966 0 1.75-.79 1.75-1.764-.784-.79-1.75-1.764zm13.5 12.268h-3v-11h3v11z"/>
        </svg>
      </a>
      
      <a
        href="https://www.instagram.com/ieee_comsoc_vit"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-quantum/10 hover:bg-quantum/20 flex items-center justify-center transition-colors"
        aria-label="Instagram"
      >
        <svg className="w-5 h-5 text-quantum" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 2.862.171 1.167.485 1.825 1.247 1.825.135.225.225.475.225.725v3.25c0 .25-.09.498-.225.723-.34.225-.66-.225-1.163-.225-1.885 0-1.058-.067-1.995-.196-2.82-.412-1.162-.313-2.148-.763-2.913-1.359-.765-.597-1.375-1.325-1.813-2.196-.438-.87-.688-1.813-.744-2.913v-3.25c0-.25.09-.498.225-.723.34-.225.66.225 1.163.225 1.885 0 1.058.067 1.995.196 2.82.412 1.162.313 2.148.763 2.913 1.359.765.597 1.375 1.325 1.813 2.196.438.87.688 1.813.744 2.913v3.25c0 .25-.09.498-.225.723-.34.225-.66-.225-1.163-.225-1.885 0-1.058-.067-1.995-.196-2.82-.412-1.162-.313-2.148-.763-2.913-1.359-.765-.597-1.375-1.325-1.813-2.196-.438-.87-.688-1.813-.744-2.913z"/>
        </svg>
      </a>
      
      <a
        href="https://github.com/ieee-comsoc-vit"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-quantum/10 hover:bg-quantum/20 flex items-center justify-center transition-colors"
        aria-label="GitHub"
      >
        <svg className="w-5 h-5 text-quantum" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.57 3.427-1.23 6.467-4.562 6.933-5.467 1.311-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404z"/>
        </svg>
      </a>
      
      <a
        href="mailto:comsoc@vit.ac.in"
        className="w-10 h-10 rounded-full bg-quantum/10 hover:bg-quantum/20 flex items-center justify-center transition-colors"
        aria-label="Email"
      >
        <svg className="w-5 h-5 text-quantum" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </a>
    </div>
  );
};

export default FloatingSocialDock;
