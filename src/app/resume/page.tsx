export default function ResumePage() {
  return (
    <div style={{ width: '100%', height: '100vh', margin: 0, padding: 0 }}>
      <iframe
        src="/resume.pdf"
        style={{
          width: '100%',
          height: '100%',
          border: 'none'
        }}
        title="Resume"
      />
    </div>
  );
}