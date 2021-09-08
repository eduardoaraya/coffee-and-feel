import { spawn, SpawnOptions } from 'child_process';
import BufferList = require('bl');
import BufferListStream = require('bl');

export const awaitSpawn = (
  command: string,
  args: string[],
  options?: SpawnOptions
) => {
  const child = spawn(command, args, options ? options : {});

  const stdout: string | BufferListStream = child.stdout
    ? new BufferList()
    : '';

  const stderr: string | BufferListStream = child.stderr
    ? new BufferList()
    : '';

  if (child.stdout) {
    child.stdout.on('data', (data: Buffer) => {
      (stdout as BufferList).append(data);
    });
  }

  if (child.stderr) {
    child.stderr.on('data', (data: Buffer) => {
      (stderr as BufferList).append(data);
    });
  }

  return new Promise((resolve, reject) => {
    child.on('error', reject);

    child.on('close', (code: number) => {
      if (code === 0) {
        resolve(stdout);
      } else {
        const err = new Error(`Child process exited with code ${code}`);
        reject(err);
      }
    });
  });
};

export default awaitSpawn;
