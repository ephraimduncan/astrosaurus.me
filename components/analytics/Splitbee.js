import Script from 'next/script';

const SplitbeeScript = () => {
  return (
    <>
      <Script async defer src="https://cdn.splitbee.io/sb.js" />
    </>
  );
};

export default SplitbeeScript;
