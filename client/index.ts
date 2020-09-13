console.log("hello js");
(async () => {
  const res = await fetch("/api/foo");
  const data = await res.json();
  console.log("foo", data);
})();
