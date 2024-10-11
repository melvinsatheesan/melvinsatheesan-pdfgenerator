import github from '@actions/github'
import { exec } from '@actions/exec';
import dotenv from 'dotenv';
import { resolve } from 'path';
import pdf from 'html-pdf';

dotenv.config();

function createPdf(htmlString) {
    return new Promise((resolve, reject) => {
        pdf.create(htmlString).toFile('sample.pdf', (err, res) => {
            if (err) {
                return reject(err);
            }
            resolve(res);
        })
    })
}

const response = createPdf('<h2>Hello</h2>')